Instructions to get virtual env set up (use python 3): https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/

Here are the exact commands I ran:

```
python3 -m pip install --user virtualenv
python3 -m venv env
source env/bin/activate
python3 -m pip install -r requirements.txt
```

After installing new dependencies, be sure to update the requirements file: `python3 -m pip freeze`

When done, run `deactivate` or close shell.

I have two requirements files. One with old version of pymongo so I can compare it to new. So you might want to set up a second venv for the old version.

Resources:

- [install packages](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/#freezing-dependencies)
- [freeze dependencies](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/#freezing-dependencies)
- [install from requirements file](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/#using-requirements-files)
- [3.6.1 docs](https://pymongo.readthedocs.io/en/3.6.1/tutorial.html)
