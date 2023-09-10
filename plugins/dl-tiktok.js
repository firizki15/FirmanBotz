const { byIchanZX } = require('../scrape/tiktok.js')
var handler = async (m, { conn, text, usedPrefix, command }) => {
 
 if (!text) throw ` Gunakan link Tiktok!\n\n📌 Example:\n*${usedPrefix + command}* https://tiktok.com/ichanxd`
m.reply(wait)
let Ichanapi = await byIchanZX(text)
 	  
let tagnya = `@${m.sender.split`@`[0]}`
let tg = `${m.sender.split('@')[0]}@s.whatsapp.net`
let chan = `${htki} ᴛɪᴋᴛᴏᴋ ᴡᴍ ${htka}\n➔ ɴɪᴄᴋɴᴀᴍᴇ ${Ichanapi.nickname}\n➔ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:\n${Ichanapi.title}\n\n${cmenua}\n${wm}`
 conn.sendFile(tg, Ichanapi.play, 'fb.mp4', `${chan}`, m)
 conn.sendFile(m.chat, Ichanapi.music, 'fb.mp4', `${chan}`, m)
 await m.reply(`🤖👋TERKIRIM DI PRIVATE CHAT ${tagnya}`)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((tiktok|tt|tt2)(downloder|dl)?)$/i
module.exports = handler