const { Langfuse } = require('langfuse');
const nock = require('nock');

nock('https://cloud.langfuse.com')
  .persist()
  .post('/api/public/ingestion')
  .delay(300000) // 5 minute delay to trigger timeouts/aborts
  .reply(200, { message: 'Success' })
  .get('/api/public/health')
  .delay(300000) // 5 minute delay
  .reply(200, { status: 'OK' });

// Add event listeners to catch any unhandled errors/aborts
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection:', reason);
  if (reason && reason.code === 'ECANCELLED') {
    console.log('🎉 ECANCELLED error detected in unhandled rejection!');
  }
});

process.on('uncaughtException', (error) => {
  console.log('Uncaught Exception:', error.message, error.code);
  if (error.code === 'ECANCELLED') {
    console.log('🎉 ECANCELLED error detected in uncaught exception!');
  }
});

const langfuse = new Langfuse({
  publicKey: 'pk_test_demo',
  secretKey: 'sk_test_demo',
  baseUrl: 'https://cloud.langfuse.com',
  // Configure shorter timeouts to trigger abort behavior faster
  flushAt: 1, // Flush after each trace instead of batching
  requestTimeout: 5000, // 5 second timeout
});

async function createTraceWithSpans(traceIndex) {
  console.log(`Creating trace ${traceIndex}...`);
  
  const trace = langfuse.trace({
    name: `demo-trace-${traceIndex}`,
    userId: `user-${traceIndex % 3}`,
    metadata: {
      environment: 'demo',
      version: '1.0.0',
      traceNumber: traceIndex
    }
  });

  const spanCount = Math.floor(Math.random() * 5) + 2;
  console.log(`  Adding ${spanCount} spans...`);

  for (let i = 0; i < spanCount; i++) {
    const span = trace.span({
      name: `operation-${i}`,
      input: { step: i, operation: `task-${i}` },
      output: { result: `completed-${i}`, success: true },
      metadata: {
        duration: Math.random() * 1000,
        category: i % 2 === 0 ? 'processing' : 'validation'
      }
    });

    if (i === spanCount - 1) {
      span.generation({
        name: `llm-call-${i}`,
        model: 'gpt-3.5-turbo',
        input: [{ role: 'user', content: 'Hello world' }],
        output: { content: `Response for trace ${traceIndex}, span ${i}` },
        usage: {
          promptTokens: 10,
          completionTokens: 15,
          totalTokens: 25
        }
      });
    }

    span.end();
  }

  trace.update({
    output: { tracesCompleted: traceIndex + 1 },
    tags: ['demo', 'test', `batch-${Math.floor(traceIndex / 5)}`]
  });

  console.log(`  Trace ${traceIndex} completed with ${spanCount} spans`);
  return trace;
}

async function runDemo() {
  console.log('Starting Langfuse demo with delayed server responses...');
  console.log('Server responses delayed by 5 minutes, client timeout set to 5 seconds');
  console.log('This should trigger timeout/abort behavior and potentially ECANCELLED errors');
  
  const traces = [];
  const traceCount = 3; // Reduced count for quicker testing

  for (let i = 0; i < traceCount; i++) {
    try {
      console.log(`\n--- Creating trace ${i} ---`);
      const trace = await createTraceWithSpans(i);
      traces.push(trace);
      
      console.log('Attempting to flush trace immediately...');
      await langfuse.flushAsync();
      console.log('Flush completed (this might not happen due to timeout)');
      
    } catch (error) {
      console.log('Error during trace creation:', error.message, error.code);
      if (error.code === 'ECANCELLED') {
        console.log('🎉 ECANCELLED error detected during trace creation!');
      }
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log(`\nDemo completed! Attempted to create ${traceCount} traces.`);
  console.log('Server calls were delayed to trigger timeout/abort behavior.');
  
  // waiting around indefinitely
  await new Promise(resolve => setTimeout(resolve, 1000000));

  // langfuse.shutdownAsync();
}

runDemo().catch(console.error);