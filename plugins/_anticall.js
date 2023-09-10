let { WAMessageStubType } = require('@adiwajshing/baileys')
let { format } = require('util');

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))
let handler = m => m
handler.all = async function (m) {
	if (m.fromMe && m.isBaileys) return !0
	let text;
	let setting = global.db.data.settings[this.user.jid]
	if(!setting.anticall) return 
	
	if (m.messageStubType === (WAMessageStubType.CALL_MISSED_VOICE || WAMessageStubType.CALL_MISSED_VIDEO)) {
		await conn.reply(m.chat, 'kamu Di blockir oleh bot karena telah melanggar aturan bot\n\n*📮Dilarang menelepon Bot!*', null)
		await delay(1000)
		await this.updateBlockStatus(m.chat, "block")
	}
}
module.exports = handler