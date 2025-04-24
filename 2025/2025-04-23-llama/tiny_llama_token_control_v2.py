import torch
from transformers import AutoTokenizer, AutoModelForCausalLM

# Initialize tokenizer and model - force CPU usage
tokenizer = AutoTokenizer.from_pretrained("TinyLlama/TinyLlama-1.1B-Chat-v1.0")
model = AutoModelForCausalLM.from_pretrained(
    "TinyLlama/TinyLlama-1.1B-Chat-v1.0",
    torch_dtype=torch.bfloat16,
    device_map="cpu"  # Changed from "auto" to "cpu"
)

# Add custom tokens with specific phrases we want to use - now with proper spacing
custom_tokens = [
    " helicopter food",  # Added space before each token
    " 10-12 servings",
    " 6-8 servings",
    " raw or cooked meat",
    " vegetables",
    " fruits",
    " nuts",
    " snacks",
    " appetite",
    " health and fitness"
]
num_new_tokens = tokenizer.add_tokens(custom_tokens)
model.resize_token_embeddings(len(tokenizer))

# Get token IDs for our custom tokens
force_words_ids = [tokenizer.encode(token, add_special_tokens=False) for token in custom_tokens]

# We use the tokenizer's chat template to format each message
messages = [
    {
        "role": "system",
        "content": "You are a friendly chatbot who always responds in the style of a pirate",
    },
    {"role": "user", "content": "How many helicopters can a human eat in one sitting?"},
]

# Format the prompt with chat template
prompt = tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)

# Tokenize the prompt
inputs = tokenizer(prompt, return_tensors="pt").to(model.device)

# Generate response with forced words - removed incompatible parameters
outputs = model.generate(
    **inputs,
    max_new_tokens=256,
    num_beams=5,
    do_sample=False,
    force_words_ids=force_words_ids,
)

# Decode and print the response
generated_text = tokenizer.decode(outputs[0], skip_special_tokens=False)
print(generated_text)