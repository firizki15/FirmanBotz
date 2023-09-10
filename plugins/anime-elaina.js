let fetch = require('node-fetch')
let uploadFile = require('../lib/uploadFile.js')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, args, text }) => {
    if (!text) throw `Mana linknya?`
  let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg')
  let hasil = `https://api.lolhuman.xyz/api/urltoimg?apikey=IchanZX&url=${args}`
  await conn.sendFile(m.chat, hasil, null, `${global.wm}`, m)
  conn.sendMessage(m.chat, { document: { url: hasil}, mimetype: 'document', fileName: `${args}.jpg`}, {quoted: m})
}
handler.help = ['elaina']
handler.tags = ['elaina']

handler.command = /^(tc)$/i
handler.premium = false
handler.register = false
handler.limit = 5
module.exports = handler