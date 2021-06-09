This is just some test code I used to validate a white paper a coworker wrote. It doesn't do much of worth except to show how to handle python 3 deps on OSX and do some simple string transformations.

Python 3 (I used python 3.9.1 at the time of writing)

```sh
python3 -m venv env
source env/bin/activate

# i did this to install the libs initially
pip3 install pandas
#...

# then froze those into a requirements file
pip3 freeze > requirements.txt

# so you can now install everything
pip3 install -r requirements.txt

# run
python3 app.py
```

I ended up not even needing to install requirements, but this is still a nice reference for setting up venv with python3 and installing/freezing requirements.