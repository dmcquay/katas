from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

def main():
    # Load a small Llama model (7B parameters)
    model_name = "meta-llama/Llama-2-7b-chat-hf"
    
    # Initialize tokenizer and model
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModelForCausalLM.from_pretrained(
        model_name,
        torch_dtype=torch.float16,
        device_map="auto"
    )

    # Define allowed tokens (example: only allow certain words)
    allowed_tokens = ["yes", "no", "maybe", "I", "don't", "know"]
    allowed_token_ids = [tokenizer.encode(token)[0] for token in allowed_tokens]
    
    # Create a mask for allowed tokens
    vocab_size = tokenizer.vocab_size
    allowed_mask = torch.zeros(vocab_size, dtype=torch.bool)
    allowed_mask[allowed_token_ids] = True

    # Prepare input
    prompt = "Do you think it will rain tomorrow? Answer with only yes, no, or maybe:"
    inputs = tokenizer(prompt, return_tensors="pt").to(model.device)

    # Generate with controlled vocabulary
    with torch.no_grad():
        outputs = model.generate(
            **inputs,
            max_new_tokens=10,
            do_sample=True,
            temperature=0.7,
            pad_token_id=tokenizer.eos_token_id,
            # Apply the allowed tokens mask
            forced_bos_token_id=allowed_token_ids[0],
            forced_eos_token_id=allowed_token_ids[-1],
            # Use the mask to restrict vocabulary
            forced_token_ids=allowed_token_ids
        )

    # Decode and print the response
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    print(f"Prompt: {prompt}")
    print(f"Response: {response}")

if __name__ == "__main__":
    main() 