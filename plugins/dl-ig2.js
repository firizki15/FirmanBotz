const { XeonInstaMp4 } = require('../scrape/XeonInstaMp4.js')

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya?\nExample: *.igdl https://www.instagram.com/reel/CsC2PQCNgM1/?igshid=NTc4MTIwNjQ2YQ==*`
m.reply(wait)
let resxeonyinsta = await XeonInstaMp4(text)
let cap = `_Nih Kak Videonya >,<_`
conn.sendMessage(m.chat, { video: { url: resxeonyinsta.url[0].url }, caption: wm }, m)
}
handler.help = ['ig2']
handler.tags = ['downloader']
handler.command = /^(ctxdlig)$/i

module.exports = handler