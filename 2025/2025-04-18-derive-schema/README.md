uv takes care of providing python and dependency management and is fast

https://docs.astral.sh/uv/getting-started/installation/

## Creating a Virtual Environment with uv

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

4. Install dependencies (if you have a requirements.txt):
   ```bash
   uv pip install -r requirements.txt
   ```

5. To deactivate the virtual environment when you're done:
   ```bash
   deactivate
   ```

First time only: `uv init`

Install libararies, such as polars: `uv add polars`
