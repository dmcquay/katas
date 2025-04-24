import torch
from transformers import AutoTokenizer, AutoModelForCausalLM

# Initialize tokenizer and model - force CPU usage
tokenizer = AutoTokenizer.from_pretrained("TinyLlama/TinyLlama-1.1B-Chat-v1.0")
model = AutoModelForCausalLM.from_pretrained(
    "TinyLlama/TinyLlama-1.1B-Chat-v1.0",
    torch_dtype=torch.bfloat16,
    device_map="cpu"
)

class AllowedTokensLogitsProcessor:
    def __init__(self, allowed_token_ids):
        self.allowed_token_ids = set(allowed_token_ids)
    
    def __call__(self, input_ids, scores):
        scores[:, list(set(range(scores.shape[1])) - self.allowed_token_ids)] = float('-inf')
        return scores

# Define our allowed tokens/phrases
allowed_tokens = [
    "helicopter food",
    "10-12 servings",
    "6-8 servings",
    "raw or cooked meat",
    "vegetables",
    "fruits",
    "nuts",
    "snacks",
    "appetite",
    "health and fitness"
]

# Get token IDs for our allowed tokens
allowed_token_ids = set()
for phrase in allowed_tokens:
    ids = tokenizer.encode(phrase, add_special_tokens=False)
    allowed_token_ids.update(ids)

# Add basic tokens needed for coherent text
basic_tokens = [" ", ".", ",", "?", "!", "'", '"', "\n"]
for token in basic_tokens:
    ids = tokenizer.encode(token, add_special_tokens=False)
    allowed_token_ids.update(ids)

# Add special tokens
allowed_token_ids.update(set(tokenizer.all_special_ids))

# Create the logits processor
logits_processor = AllowedTokensLogitsProcessor(allowed_token_ids)

# Your messages setup
messages = [
    {
        "role": "system",
        "content": "You are a friendly chatbot who always responds in the style of a pirate",
    },
    {"role": "user", "content": "How many helicopters can a human eat in one sitting?"},
]

# Format the prompt
prompt = tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
inputs = tokenizer(prompt, return_tensors="pt").to(model.device)

# Generate with logits processor
outputs = model.generate(
    **inputs,
    max_new_tokens=256,
    logits_processor=[logits_processor],
    do_sample=True,
    temperature=0.7,
    num_beams=5
)

# Decode and print the response
generated_text = tokenizer.decode(outputs[0], skip_special_tokens=False)
print(generated_text) 