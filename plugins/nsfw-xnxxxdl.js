let fetch = require('node-fetch')
let axios = require('axios')
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
let tagnya = `@${m.sender.split`@`[0]}`
  if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} https://xnxx.com/`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/xnxx?apikey=ZXcoderiD&url=${args[0]}`)
let data = await res.json()
let json = data.result

let view = await fetch(`https://api.lolhuman.xyz/api/xnxx?apikey=ZXcoderiD&url=${args[0]}`)
let don = await view.json()
let jsoon = don.result
let done = `_Sedang mengirim *Video*..._`
await m.reply(done)
await conn.sendFile(m.chat, json.link.mp4, 'video/mp4', `*Jika Erorr DOwnload Manual Bro*
Linknya : ${json.result}`, m)
} catch (e) {
conn.reply(m.chat, 'Tidak dapat mengambil url', m)
throw e
}
} 
handler.help = ['xnxx'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(xxxdl|xnxxxdl)$/i

module.exports = handler