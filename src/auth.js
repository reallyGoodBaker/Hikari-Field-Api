const {post} = require('./https')

/**
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<{access_token:string;expires_in:number;token_type:string;}>}
 */
async function login(email, password) {
    const data = (await post('https://api.hikarifield.co.jp/v1/auth/login', {email, password})).json()
    return Object.assign(data, {
        timeStamp: new Date().getTime()
    })
}

module.exports = { 
    login
}