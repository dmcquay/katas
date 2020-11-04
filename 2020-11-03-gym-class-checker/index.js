require('dotenv').config()
const fetch = require('node-fetch')

const e = process.env;
const config = {
  cookie: e.COOKIE
}

const clubNumber = '07138'

async function eventHasAvailableSpace(eventId) {
  const response = await fetch(`https://chicago-abc.appspot.com/find-events.json?clubNumber=${clubNumber}&eventDateRange=2020-11-03,2020-11-05`)
  const events = await response.json()
  const event = events.filter(x => x.eventId === eventId)
  return event.numAttendees < parseInt(event.maxAttendees)
}

async function enroll(eventId) {
  // const eventId = '0a7d6f502ed342259d998450a91ab320' // high fitness
  // const eventId = '6abf7d8819484add96a54b4c0bc280a1'
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
    throw new Error('Got non-200 response when enrolling in event ' + eventId + ' \nDetails: ' + JSON.stringify(data, null, 2))
  }
}

function log(msg) {
  console.log({date: new Date().toISOString(), msg})
}

async function main() {
  const eventId = '0a7d6f502ed342259d998450a91ab320'
  while (true) {
    if (await eventHasAvailableSpace(eventId)) {
      log('Space available. Enrolling.')
      await enroll(eventId)
      log('Enrolled')
      break
    } else {
      const duration = Math.floor(1000 * 60 * 2 * Math.random())
      log(`No space availble. Sleeping for ${duration / 60 / 1000} minutes.`)
      await new Promise(r => setTimeout(r, duration))
    }
  }
}

main()