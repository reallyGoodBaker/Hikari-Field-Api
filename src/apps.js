const { post } = require('./https')
const { authHeader } = require('./util')

async function getApps(auth, category = 3) {
    return (await post('https://api.hikarifield.co.jp/v1/apps', { category_id: category }, authHeader(auth))).json()
}

async function getGameFiles(auth, buildId) {
    return (await post(
        `https://api.hikarifield.co.jp/v1/files`,
        { game_build_id: buildId, from_build_id: 0 },
        authHeader(auth)
    )).json()
}

async function getDownloadUrl(gameFiles, user, sign) {
    let url = `https://download.hikarifield.co.jp/${gameFiles.filename}`,
        data = {
            uid: user.id,
            Expires: sign[1],
            'Key-Pair-Id': sign[2],
            Signature: sign[3]
        }
    
    const queryArray = []
    for (const k in data) {
        queryArray.push(`${k}=${data[k]}`)
    }
    const queryString = queryArray.join('&')

    return queryArray.length
        ? url + '?' + queryString
        : url
}

async function installed(auth, id, buildId, taskType, status, uuid) {
    return (await post(
        `https://api.hikarifield.co.jp/v1/apps/installed`,
        {
            game_app_id: id,
            game_build_id: buildId,
            task_type: taskType,
            task_status: status,
            uuid
        },
        authHeader(auth)
    )).json()
}


module.exports = {
    getApps, getGameFiles, installed, getDownloadUrl
}