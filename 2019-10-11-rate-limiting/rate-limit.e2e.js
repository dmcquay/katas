const fetch = require('node-fetch')
const {expect} = require('chai')

describe('rate limiting of /', () => {
    before(async () => {
        const response = await fetch('http://localhost:3000/reset-rate-limits')
        expect(response.status).to.equal(200)
        await response.text()
    })

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

    it('after waiting 2 seconds, we should get a 200 response again', async function() {
        this.timeout(3000);

        await new Promise(resolve => setTimeout(resolve, 2000))

        const response = await fetch('http://localhost:3000/')
        expect(response.status).to.equal(200)
        await response.text()
    })
})