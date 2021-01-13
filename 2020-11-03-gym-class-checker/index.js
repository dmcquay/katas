require('dotenv').config()
const fetch = require('node-fetch')

const e = process.env;
const config = {
  cookie: e.COOKIE
}

const clubNumber = '07138'

async function eventHasAvailableSpace(eventId) {
  const response = await fetch(`https://chicago-abc.appspot.com/find-events.json?clubNumber=${clubNumber}&eventDateRange=2021-01-13,2020-01-13`)
  const events = await response.json()
  const event = events.filter(x => x.eventId === eventId)
  return event.numAttendees < parseInt(event.maxAttendees)
}

async function enroll(eventId) {
  const url = `https://www.myiclubonline.com/iclub/scheduling/addMemberToEvent?club=${clubNumber}&eventItemId=${eventId}&_=1604459716424`
  const options = {
    headers: {
      Cookie: config.cookie,
      Referer: 'https://www.myiclubonline.com/iclub/members'
    }
  }
  const response = await fetch(url, options)
  if (response.status !== 200) {
    throw new Error('Got non-200 response when enrolling in event ' + eventId)
  }
  const data = await response.json()
  if (data.status !== 'success') {
    if (data.status === 'error' && data.messages[0].message.text === "We are sorry, the class you requested is now full.  If you need further assistance, please contact the front desk.") {
      return false
    } else {
      throw new Error('Got non-200 response when enrolling in event ' + eventId + ' \nDetails: ' + JSON.stringify(data, null, 2))
    }
  }
}

function log(msg) {
  console.log(JSON.stringify({date: new Date().toISOString(), msg}))
}

async function main() {
  const eventId = '49bbfbcec91d466d8749dcd0af7e6952'
  // while (true) {
  //   if (await eventHasAvailableSpace(eventId)) {
  //     log('Space available. Enrolling.')
  //     await enroll(eventId)
  //     log('Enrolled')
  //     break
  //   } else {
  //     const duration = Math.floor(1000 * 60 * 2 * Math.random())
  //     log(`No space availble. Sleeping for ${duration / 60 / 1000} minutes.`)
  //     await new Promise(r => setTimeout(r, duration))
  //   }
  // }

  while (true) {
    try {
      const success = await enroll(eventId)
      if (success) {
        log('Enrolled')
        break
      } else {
        log('No space available.')
      }
    } catch(err) {
      console.log(`Error: ${err.message}`)
    }
      const duration = Math.floor(1000 * 60 * 2 * Math.random())
      log(`Sleeping for ${duration / 60 / 1000} minutes.`)
      await new Promise(r => setTimeout(r, duration))
  }

  // await enroll(eventId)
}

main()