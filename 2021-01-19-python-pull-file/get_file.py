import urllib2
from datetime import datetime

# sensitive value. don't commit anything but a placeholder here.
token = 'put_token_here'

url = "https://paas-api-production.pluralsight.com/rest/course-progress"
filename = r'c:\tsAdmin\psAccentureData.csv'
logFilename = r'c:\tsAdmin\psAccentureData.log'

# local testing values
# url = "http://localhost:8000/test.csv"
# filename = 'accenture_tq_course_progress.csv'
# logFilename = 'log'

logFile = open(logFilename, 'a')
def log(msg):
  now = datetime.now()
  dt_string = now.strftime("%Y/%m/%d %H:%M:%S")
  logFile.write(dt_string + ' - ' + msg + '\r\n')

log('Pulling new Accenture course progress report')

try:
  req = urllib2.Request(url, None, {
    "Authorization": "Bearer " + token,
    "Accept": "*/*",
    "Accept-Encoding": "*",
    "User-Agent": "insomnia/2020.5.1"
  })
  response = urllib2.urlopen(req)
  CHUNK = 16 * 1024
  with open(filename, 'wb') as f:
      while True:
          chunk = response.read(CHUNK)
          if not chunk:
              break
          f.write(chunk)
except Exception as err:
  log('Failed: {0}'.format(str(err)))

log('done')
logFile.close()