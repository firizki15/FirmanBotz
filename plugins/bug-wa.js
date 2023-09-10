let fs = require('fs')
let handler = async (m, { conn, text, command }) => {
if (!text) throw `*Jangan salah gunakan om yah*\n\nExample: ${command} 628XXXXXX`
let num = text.split('/')[0]+"@s.whatsapp.net"
await m.reply('Tunggu Sebentar...')

 conn.reply(m.chat, 'halooo', m)
m.reply('sukses')
 }


handler.tags = ['tools']
handler.command = /^(bugwa|bug2)$/i 
handler.premium = true 
module.exports = handler