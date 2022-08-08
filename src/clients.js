const {get, post} = require('./https')

async function getImage(tag, size=0) {
    const realSize = size
        ? 1080
        : 540
    return (await get(`https://static.hikarifield.co.jp/images/visual/${realSize}/${tag}.jpg`)).buffer()
}

async function version() {
    return (await post('https://api.hikarifield.co.jp/v1/clients/version')).json()
}

async function faqs() {
    return (await post('https://api.hikarifield.co.jp/v1/clients/faqs')).json()
}

async function getCover(tag) {
    return (await get(`https://static.hikarifield.co.jp/images/shop/${tag}/cover_v.jpg`)).buffer()
}

module.exports = {
    getImage, version, faqs, getCover
}