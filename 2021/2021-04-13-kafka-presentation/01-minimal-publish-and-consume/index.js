const { Kafka } = require('kafkajs')
 
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
})
 
const producer = kafka.producer()
const consumer = kafka.consumer({ groupId: 'test-group-' + Math.random() })
 
const run = async () => {
  // Producing
  await producer.connect()
  const produceInterval = setInterval(async () => {
    await producer.send({
      topic: 'test-topic',
      messages: [
        { value: `The time is ${new Date().toISOString()}` },
      ],
    })
    console.log('sent message')
  }, 1000)
 
  // Consuming
  await consumer.connect()
  console.log('connected consumer')
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })
  console.log('subscribed')
 
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      })
    },
  })
  console.log('consuming messages. press ctrl-c to disconnect and close process.')
  
  // Shutdown and signal handling
  const shutdown = async () => {  
    console.log('shutting down')
    clearInterval(produceInterval)
    await consumer.disconnect()
    console.log('disconnected consumer')
    await producer.disconnect()
    console.log('disconnected producer')
  }

  process.on('SIGINT', shutdown) // for ctrl-c in console
  process.on('SIGTERM', shutdown) // for docker
}
 
run().catch(console.error)