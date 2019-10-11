const express = require('express')

const app = express()

let count = 0

let windowInterval = undefined;
function resetRateLimits() {
    if (windowInterval) clearInterval(windowInterval)
    count = 0
    windowInterval = setInterval(() => count = 0, 2000)
}
resetRateLimits()

app.get('/reset-rate-limits', (req, res) => {
    resetRateLimits()
    res.send()
})

app.get('/', (req, res) => {
    if (count >= 5) {
        res.status(429)
        res.send('Too Many Requests in the last 10 seconds')
    } else {
        res.send('hello world')
        count++
    }
})

app.listen('3000', () => { console.log('http://localhost:3000') })