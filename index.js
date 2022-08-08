const {login, logout, refresh} = require('./src/auth')
const {version, getImage, faqs, getCover} = require('./src/clients')
const {getApps, getGameFiles, getDownloadUrl, installed} = require('./src/apps')
const {info} = require('./src/user')
const {signUrl, bytes} = require('./src/builds')

module.exports = {
    login, version, getImage, info, getApps, logout,
    faqs, getCover, getGameFiles, getDownloadUrl, installed,
    signUrl, bytes, refresh
}