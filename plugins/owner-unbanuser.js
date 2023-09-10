let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

  if (!text) return conn.reply(m.chat, `*❏ GET NUMBER*\n\n• ${usedPrefix}unban number|days\n*Example:* ${usedPrefix}unban 6283137550315|99\n\n• ${usedPrefix}unban @tag|days\n*Example:* ${usedPrefix}unban @⁨+62 831-3755-0315 | 99`, m)
  text = no(text) + "@s.whatsapp.net"
  global.db.data.users[text].banned = false
  global.db.data.users[text].bannedDate = 0
  conn.reply(m.chat,`*Berhasil unbanned user @${text.split('@')[0]}.*`,m,{ contextInfo: { mentionedJid: [text] } })

}
handler.help = ['unban']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.rowner = false
handler.prem = true
handler.fail = null
module.exports = handler