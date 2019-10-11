const fetch = require('node-fetch')
const {expect} = require('chai')

it('should return OK 5 times', async () => {
    for (let i = 0; i < 5; i++) {
        const response = await fetch('http://localhost:3000/')
        expect(response.status).to.equal(200)
        await response.text()
    }
})

it('on the sixth try we should get a 429 indicating that we have been rate limited', async () => {
    const response = await fetch('http://localhost:3000/')
    expect(response.status).to.equal(429)
    await response.text()
})

it('after waiting 10 seconds, we should get a 200 response again', async () => {
    await new Promise(resolve => setTimeout(resolve, 10000))

    const response = await fetch('http://localhost:3000/')
    expect(response.status).to.equal(200)
    await response.text()
})