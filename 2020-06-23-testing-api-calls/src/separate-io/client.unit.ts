import nock from 'nock'
import {expect} from 'chai'

import {httpGet, ErrorType} from './client'

describe('client', () => {
    describe('#httpGet', () => {
        context('when 200 response with JSON payload', () => {
            it('should populate status and parsed JSON as data', async () => {
                nock('http://example.com')
                    .get('/foo')
                    .reply(200, {foo: 'bar'})
                const result = await httpGet('http://example.com/foo', {})
                expect(result).to.eql({
                    success: true,
                    data: {foo: 'bar'},
                    errorType: undefined,
                    errorMessage: undefined,
                    meta: {
                        status: 200
                    }
                })
            })
        })

        context('when 200 response with non-JSON payload', () => {
            it('should populate status and plain string as data', async () => {
                nock('http://example.com')
                    .get('/foo')
                    .reply(200, '[this is not json')
                const result = await httpGet('http://example.com/foo', {})
                expect(result).to.eql({
                    success: true,
                    data: '[this is not json',
                    errorType: undefined,
                    errorMessage: undefined,
                    meta: {
                        status: 200
                    }
                })
            })
        })

        context('when 200 response with an invalid JSON payload', () => {
            it('should populate status, and indicate error via error type and message', async () => {
                nock('http://example.com')
                    .get('/foo')
                    .reply(200, '[this is not json', {'Content-Type': 'application/json'})
                const result = await httpGet('http://example.com/foo', {})
                expect(result).to.eql({
                    success: false,
                    data: undefined,
                    errorType: ErrorType.INVALID_JSON,
                    errorMessage: 'invalid json response body at http://example.com/foo reason: Unexpected token h in JSON at position 2',
                    meta: {
                        status: 200
                    }
                })
            })
        })

        context('when non-200 response with a body', () => {
            it('should populate status and data', async () => {
                nock('http://example.com')
                    .get('/foo')
                    .reply(500, 'error message from server')
                const result = await httpGet('http://example.com/foo', {})
                expect(result).to.eql({
                    success: false,
                    data: undefined,
                    errorType: ErrorType.SERVER_ERROR,
                    errorMessage: 'error message from server',
                    meta: {
                        status: 500
                    }
                })
            })
        })

        context('when network error', () => {
            it('should error type and message only', async () => {
                nock('http://example.com')
                    .get('/foo')
                    .replyWithError('something awful happened')
                const result = await httpGet('http://example.com/foo', {})
                expect(result).to.eql({
                    success: false,
                    errorType: ErrorType.NETWORK_ERROR,
                    errorMessage: 'request to http://example.com/foo failed, reason: something awful happened',
                    meta: {}
                })
            })
        })
    })
})