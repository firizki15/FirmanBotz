let handler = async (m, { conn, text, usedPrefix, command }) => {

var chan = `❏––––––『 *SCRIPT* 』––––––❏
jadi bot murmer Langsung Chat aja Ownernya
wa.me/${nomorown}

☕ Link YT :
https://youtube.com/@FirmanBotzz
🍜 Link SC :
https://wa.me/message/PLT4DTAYQE3AJ1
https://chat.whatsapp.com/HTpiCMLkix7HPKSrU5OC0f

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
handler.command = /^(jadibot)$/i

module.exports = handler