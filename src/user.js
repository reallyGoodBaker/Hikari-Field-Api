const {post} = require('./https')
const {authHeader} = require('./util')

async function info(auth) {
    return (await post('https://api.hikarifield.co.jp/v1/user/info', {}, authHeader(auth))).json()
}

module.exports = {
    info
}