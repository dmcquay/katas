const express = require('express')

const config = require('./config')
const {rateLimitMiddleware, resetRateLimitsRoute} = require('./rate-limits')

const app = express()

app.use(rateLimitMiddleware)

if (config.exposeTestEndpoints) {
    app.get('/reset-rate-limits', resetRateLimitsRoute)
}

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen('3000', () => { console.log('http://localhost:3000') })