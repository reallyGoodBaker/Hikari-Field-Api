const {post, del} = require('./https')
const {authHeader} = require('./util')

async function login(email, password) {
    return (await post('https://api.hikarifield.co.jp/v1/auth/login', {email, password})).json()
}

async function logout(auth) {
    return (await del('https://api.hikarifield.co.jp/v1/auth/logout', authHeader(auth)))
}

async function refresh(auth) {
    return (await post('https://api.hikarifield.co.jp/v1/auth/login', {}, authHeader(auth))).json()
}


module.exports = { 
    login, logout, refresh
}