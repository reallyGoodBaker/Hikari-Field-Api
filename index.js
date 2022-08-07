const {login} = require('./src/auth')
const {version, getImage} = require('./src/clients')
const {info} = require('./src/user')

module.exports = {
    login, version, getImage, info
}