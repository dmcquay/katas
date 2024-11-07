# Overview

This is a sample project to rerank the results of a search query using semantic similarity.

# Setup

```sh
brew update
brew install python@3.11
python3.11 -m venv .venv
source .venv/bin/activate
pip install pip-tools
pip-compile
pip-sync
```

# Run

```sh
python3 rerank.py
```
