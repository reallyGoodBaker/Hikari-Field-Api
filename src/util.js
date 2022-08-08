function token(auth) {
    return `${auth.token_type} ${auth.access_token}`
}

function hfHeader(headers={}) {
    return Object.assign({
        'User-Agent': 'hikari-field-client/1.1',
    }, headers)
}

function authHeader(auth, headers={}) {
    return Object.assign(hfHeader({
        Authorization: token(auth)
    }), headers)
}

module.exports = {
    token, hfHeader, authHeader
}