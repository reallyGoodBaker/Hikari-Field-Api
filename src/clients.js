const {get, post} = require('./https')

/**
 * @param {string} tag 
 * @param {number} size 0 = cover, 1 = banner
 * @returns {Promise<Buffer>}
 */
async function getImage(tag, size=0) {
    const realSize = size
        ? 1080
        : 540
    return (await get(`https://static.hikarifield.co.jp/images/visual/${realSize}/${tag}.jpg`)).buffer()
}


async function version() {
    return (await post('https://api.hikarifield.co.jp/v1/clients/version')).json()
}


module.exports = {
    getImage, version
}