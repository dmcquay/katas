'use strict'

require('dotenv').config()

const e = process.env

function toBool(val) {
    return val === 1 || (typeof(val) === 'string' && val.toLowerCase() === 'true')
}

module.exports = {
    exposeTestEndpoints: e.EXPOSE_TEST_ENDPOINTS ? toBool(e.EXPOSE_TEST_ENDPOINTS) : false
}