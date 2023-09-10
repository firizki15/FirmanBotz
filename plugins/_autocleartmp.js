var { readdirSync, rmSync } = require('fs')
var handler = async function all(m) {
    let setting = global.db.data.settings[this.user.jid]
    if (setting.cleartmp) {
        if (new Date() * 1 - setting.lastcleartmp > 600000) {
            await global.db.write()
            const dir = './tmp'
            readdirSync(dir).forEach(f => rmSync(`${dir}/${f}`));
            console.log('Starting ClearTmp...')
            setting.lastcleartmp = new Date() * 1
        }
    } return !0
}
module.exports = handler