let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/68089bfa898389ef6c255.jpg'
let chann =
`
┏━━━ꕥ〔 *${global.wm2}* 〕ꕥ━⬣ 
┃Dana: ${global.pdana}
┃Pulsa: ${global.pulsa}
┃Pulsa: ${global.pulsa2}
┃Gopay: ${global.pgopay}
┗━━━ꕥ
┏━━━ꕥ〔 *Website* 〕ꕥ━⬣ 
┃Saweria: ${global.psaweria}
┃Trakteer: ${global.ptrakteer}
┃Socialbuzz: ${global.psbuzz}
┃Thanks for Donationing!
┗━━━ꕥ
`
 await conn.sendFile(m.chat, qris, 'qris.jpg', `${chann}`, m)
}

handler.help = ['donasi']
handler.tags = ['info', 'main']
handler.command = /^(donasi|donate)$/i
module.exports = handler