let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Masukkan Text\nContoh : .carbon require("node-fetch")'
  m.reply('Tunggu Sebentar...')
  let res = `https://api.lolhuman.xyz/api/carbon?apikey=BrunoSobrino&code=${text}&language=python`
  conn.sendFile(m.chat, res, 'carbon.jpg', `${global.wm}`, m, false)
}
handler.help = ['carbon'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(carbon)$/i

module.exports = handler