import fetch from 'node-fetch'

export enum ErrorType {
    INVALID_JSON = 'invalid-json',
    SERVER_ERROR = 'server-error',
    NETWORK_ERROR = 'network-error'
}

interface HttpResult {
    success: boolean
    data?: any
    errorType?: ErrorType
    errorMessage?: string,
    meta: {
        status?: number
    }
}

export async function httpGet(url: string, options: any):Promise<HttpResult> {
    let success: boolean = true
    let status: number
    let data: any
    let errorType: ErrorType
    let errorMessage: string
    
    let response
    try {
        response = await fetch(url, options)
        status = response.status
    } catch(err) {
        return {
            success: false,
            errorType: ErrorType.NETWORK_ERROR,
            errorMessage: err.message,
            meta: {}
        }
    }

    if (response.headers.get('content-type') === 'application/json') {
        try {
            data = await response.json()
        } catch(err) {
            success = false
            errorType = ErrorType.INVALID_JSON
            errorMessage = err.message
        }
    } else {
        data = await response.text()
    }

    if (status >= 500 && status < 600) {
        success = false
        errorType = ErrorType.SERVER_ERROR
        errorMessage = data
        data = undefined
    }
    
    return {
        success,
        data,
        errorType,
        errorMessage,
        meta: {
            status
        }
    }
}