const { post } = require('./https')
const { authHeader } = require('./util')

async function signUrl(auth, buildId, uuid) {
    return (await post(
        'https://api.hikarifield.co.jp/v1/builds/sign',
        {
            game_build_id: buildId,
            task_type: 0,
            uuid,
        },
        authHeader(auth))).json()
}

async function bytes(auth, buildId, taskType, bytesAll, bytesDownloaded, downSpeed) {
    return (await post(
        'https://api.hikarifield.co.jp/v1/builds/bytes',
        {
            game_build_id: buildId,
            task_type: taskType,
            bytes_total: bytesAll,
            bytes_downloaded: bytesDownloaded,
            download_speed: downSpeed
        },
        authHeader(auth))).json()
}

module.exports = {
    signUrl, bytes
}