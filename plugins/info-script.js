let handler = async (m, { conn, text, usedPrefix, command }) => {

var chan = `❏––––––『 *SCRIPT* 』––––––❏
☕ Link YT :
https://youtu.be/6yl03ff3pqc
🍜 Link SC :
https://chat.whatsapp.com/HI7jj3QpDuvIsP53aKwitq

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕`
let menu = [
    '✅'
    ]
    conn.sendMessage(m.chat, {
    react: {
    text: `${menu}`,
    key: m.key,
    }})
let thumb = 'https://telegra.ph/file/372da96c680fe45cbbbbb.jpg'

await m.reply(chan)
}

handler.help = ['sc']
handler.tags = ['main']
handler.command = /^(sc|script)$/i

module.exports = handler