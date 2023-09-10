let fetch = require('node-fetch')
let fs = require('fs')
let axios = require('axios')
const { byIchanZX } = require('../scrape/tiktok.js')
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
let tagnya = `@${m.sender.split`@`[0]}`
  if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} https://tiktok.com/xxxx`
try {
let Ichanapi = await byIchanZX(text)
let limit = '✅ Limit Terpakai : 1'
let done = `_Sedang mengirim *Audio*..._`
// ala ala ichan ajojing
/*	let doc = { 
  audio: 
  { 
    url: json
}, 
mimetype: 'audio/mp4', fileName: `${json.title}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: json,
title: `${global.wm2}`,
body: wm,
sourceUrl: `${global.sgc}`,
thumbnail: await(await conn.getFile('./thumbnail.jpg')).data                                                                     
                                                                                                                 }
                       }
  }

//FAKEREPLY KONTAK
 const fcon = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactMessage": { "title":"sri","h": `haloo`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
	} */
await m.reply(limit)
await m.reply(done)
await conn.sendFile(m.chat, Ichanapi.music, 'audio/mpeg', wm, m)
await conn.sendMessage(m.chat, { document: { url: Ichanapi.music}, mimetype: 'document', fileName: `Tiktok_byichan.mp3`}, {quoted: m})
} catch (e) {
conn.reply(m.chat, 'Tidak dapat mengambil url', m)
throw e
}
} 
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = true
handler.command = /^(tikaudio|tiktokmp3|ttdlmp3|ttmp3|tiktokdlmp3|gettt)$/i

module.exports = handler