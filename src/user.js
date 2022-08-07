const {post} = require('./https')

/**
 * @param {{access_token:string;token_type:string;}} auth 
 */
async function info(auth, category=1) {
    const authToken = `${auth.token_type} ${auth.access_token}`

    return (await post('https://api.hikarifield.co.jp/v1/apps', {category_id: category}, {
        'User-Agent': 'hikari-field-client/1.1',
        'Authorization': authToken
    })).json()
}

module.exports = {
    info
}