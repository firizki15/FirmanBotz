let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya?\nExample: *.igdl https://www.instagram.com/reel/CsC2PQCNgM1/?igshid=NTc4MTIwNjQ2YQ==*`
m.reply(wait)
  let res = await fetch(`https://restapis.zxcoderid.xyz/api/downloader/instagram?url=${text}&apikey=Ichanzx`)
  let json = await res.json()
  let cap = `_Nih Kak Videonya >,<_`
  conn.sendMessage(m.chat, { video: { url: json.data[0].url }, caption: wm }, m)
}
handler.help = ['ig']
handler.tags = ['downloader']
handler.command = /^(Instagram|ig|igdl)$/i

module.exports = handler