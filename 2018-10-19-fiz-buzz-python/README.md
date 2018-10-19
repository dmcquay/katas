## Fizz Buzz Plus Plus Kata

https://github.com/UtahSC/FizzBuzzPlusPlus

## Setup

VSCode warned about using the macOS provided version of Python and recommended installing another version. But I'm just using that version and it seems to work fine.

Run tests: `python FizzBuzzTest.py`

No deps need to be installed. We are only using modules from python's core library.

Run tests in watch mode:

```
brew install ack entr
until ack -f --python | entr -d python ./manage.py test; do sleep 1; done
```

https://docs.python.org/3/tutorial/venv.html

### Create virtual env

Writing this to work with python 3. Might have to run `brew install python3` or `brew upgrade python`. Python will now be installed as `python3`. Also `pip3` will be available. You only need to do this to initially set up the virtual env. After that, python will be installed in the virtual env.

Create a virtual environment. First cd into this kata dir, then run:
`python3 -m venv env`

### Activate virtual env

`source env/bin/activate`

### Install new packages

`pip install nose`
`pip freeze > requirements`

## Install dependencies from requirements file

`pip install -r requirements.txt`

## Run tests

`nosetests --with-watch`
