let handler = async (m, { conn, text, usedPrefix, command }) => {
let caption = `apa?`

conn.sendFile(m.chat, './mp3/oy.mp3', '', null, m, true, { type: "audioMessage", ptt: true, fileLength: 88738 })
}

handler.customPrefix = /^(halo|bot)/i
handler.limit = false
handler.command = new RegExp
module.exports = handler