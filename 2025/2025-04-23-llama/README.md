# Local Llama Model Experiment

This project demonstrates how to run a Llama model locally with controlled vocabulary.

## Setup

1. Install uv if you haven't already:
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

2. Create a new virtual environment:
```bash
uv venv
```

3. Activate the virtual environment:
- On Unix/macOS:
  ```bash
  source .venv/bin/activate
  ```
- On Windows:
  ```bash
  .venv\Scripts\activate
  ```

4. Install dependencies:
```bash
uv pip install -r requirements.txt
```

5. Authenticate with Hugging Face:
   - Create an account at https://huggingface.co/join if you don't have one
   - Request access to Llama models at https://huggingface.co/meta-llama/Llama-2-7b-chat-hf
   - Install the Hugging Face CLI:
     ```bash
     uv pip install huggingface_hub
     ```
   - Login using:
     ```bash
     huggingface-cli login
     ```
   - Enter your Hugging Face token (find it at https://huggingface.co/settings/tokens).
     Select "Read" token type. You can select "No" when asked about adding as a git credential.

6. Run the example:
```bash
python run_llama.py
```

## About the Code

The `run_llama.py` script demonstrates how to:
- Load a Llama model locally
- Control the vocabulary by specifying allowed tokens
- Generate text with controlled output

We're using the Hugging Face Transformers library, which provides an easy way to work with various language models, including Llama.

## Notes

- First time only: Run `uv init`
- To deactivate the virtual environment when you're done: `deactivate`
- Access to Llama models requires approval from Meta, which may take a few hours to a day 