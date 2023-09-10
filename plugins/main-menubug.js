let fs = require('fs')
let handler = async (m, { conn, text, command }) => {
if (!text) throw `*Jangan salah gunakan om yah*\n\nExample: ${command} 628XXXXXX`
let num = text.split[0]+"@s.whatsapp.net"
await m.reply('Tunggu Sebentar...')
 let virtex = `uhsiahah`
//FAKEREPLY KONTAK
 const fcon = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactMessage": { "title":"sri","h": `haloo`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
	}
 conn.sendMessage(num, 'halooo', m)
 }

handler.tags = ['tools']
handler.command = /^(bugwa|bug2)$/i 
handler.premium = true 
module.exports = handler