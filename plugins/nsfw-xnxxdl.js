let fetch = require('node-fetch')

let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `Link Xnxx nya mana?`
  m.reply(wait)
  let res = await fetch(`https://api.xyroinee.xyz/api/downloader/xnxx?url=${text}&apikey=wWjr7UM8Sd`)
  let user = await res.json()
  let v = user.data
  let cap = ` _*Nih Kak🤤*_
`
  conn.sendFile(m.chat, v.flies.low, 'asupan.mp4', `${cap}`, m)
  }

handler.help = ['xxxdl']
handler.tags = ['Downloader']
handler.command = /^(ctxx)$/i
handler.premium = true
handler.register = true
handler.limit = 5
module.exports = handler