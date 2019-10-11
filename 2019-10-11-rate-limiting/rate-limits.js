'use strict'

let count = 0
let windowInterval = undefined
resetRateLimits()

function resetRateLimits() {
    if (windowInterval) clearInterval(windowInterval)
    count = 0
    windowInterval = setInterval(() => count = 0, 2000)
}

function rateLimitMiddleware(req, res, next) {
    if (count >= 5) {
        res.status(429)
        res.send('Too Many Requests in the last 10 seconds')
    } else {
        count++
        next()
    }
}

function resetRateLimitsRoute(req, res) {
    resetRateLimits()
    res.send()
}

module.exports = {
    rateLimitMiddleware,
    resetRateLimitsRoute
}