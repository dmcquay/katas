'use strict'

const rateLimit = (windowIntervalMillis, maxCount) => {
    let count = 0

    setInterval(() => count = 0, windowIntervalMillis)

    return (req, res, next) => {
        if (count >= maxCount) {
            res.status(429)
            res.send('Too Many Requests')
        } else {
            count++
            next()
        }
    }
}

module.exports = {
    rateLimit
}