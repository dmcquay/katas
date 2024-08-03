# Install a specific version, e.g., Python 3.9.6

pyenv install 3.9.6

# Set the installed version as the default

pyenv global 3.9.6

# Create a new virtual environment

pyenv virtualenv 3.9.6 2024-08-02-python-learning

# List all virtual environments

pyenv virtualenvs

# Activate the virtual environment

pyenv activate 2024-08-02-python-learning

# Deactivate the virtual environment

pyenv deactivate

# Install requirements

pip3 install -r requirements.txt

# Run

fastapi dev 01-first-steps.py
