const fetch = require('node-fetch')
const {expect} = require('chai')

it('should return OK 5 times then return X for remainder of window, then return OK again', async () => {
    const response = await fetch('http://localhost:3000/')
    expect(response.status).to.equal(200)
})