const {request} = require('../https')
const {JSDOM} = require('jsdom')

const WebStoreURL = 'https://store.hikarifield.co.jp/'

function cookieArr2obj(arr) {
    let obj = {}
    for (const c of arr) {
        const [cookie] = c.split('; ')
        const [k, v] = cookie.split('=')
        obj[k] = v
    }
    return obj
}

function cookieObj2str(obj) {
    let str = []
    for (const k in obj) {
        str.push(`${k}=${obj[k]}`)
    }
    return str.join('; ')
}

async function init() {
    const _cookies = (await request('GET', WebStoreURL)).headers['set-cookie']
    return cookieArr2obj(_cookies)
}


async function getCaptcha(cookies) {
    let info = {cookies}

    const req = await request('GET', WebStoreURL + 'login', {}, {
        Cookie: cookieObj2str(cookies)
    })

    const newCookies = cookieArr2obj(
        req.headers['set-cookie']
    )

    const window = new JSDOM(
        req.text()
    ).window

    info.cookies = Object.assign(cookies, newCookies)
    info.token = window.document.querySelector('[name=_token]').value
    info.captchaUrl = window.document.querySelector('.captcha').src

    return info
}

async function login(info, email, passwd, captcha) {
    let loginInfo = {
        _token: info.token,
        email, password: passwd,
        captcha
    }

    let formData = []
    for (const k in loginInfo) {
        formData.push(`${k}=${loginInfo[k]}`)
    }

    const req = await request('POST', WebStoreURL + 'login', encodeURI(formData.join('&')), {
        Cookie: cookieObj2str(info.cookies),
        'Content-Type': 'application/x-www-form-urlencoded',
        Host: 'store.hikarifield.co.jp',
        Origin: 'https://store.hikarifield.co.jp',
        Referer: 'https://store.hikarifield.co.jp/login'
    })

    return req.text()
}

module.exports = {
    init, getCaptcha, login,
}