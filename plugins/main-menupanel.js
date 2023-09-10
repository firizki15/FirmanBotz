const moment = require("moment-timezone");
let handler = async (m, { conn, text, usedPrefix, command }) => {
var chan = `❏––––––『 *PANEL PTERODACTYL* 』––––––❏
– *R E S E L L E R*

┌ ◦ ${usedPrefix}1gb *name,number*
│ ◦ ${usedPrefix}2gb *name,number*
│ ◦ ${usedPrefix}3gb *name,number*
│ ◦ ${usedPrefix}4gb *name,number*
│ ◦ ${usedPrefix}5gb *name,number*
│ ◦ ${usedPrefix}6gb *name,number*
│ ◦ ${usedPrefix}7gb *name,number*
│ ◦ ${usedPrefix}8gb *name,number*
│ ◦ ${usedPrefix}10gb *name,number*
└ ◦ ${usedPrefix}unli *only owner*

– *P A N E L*

┌ ◦ ${usedPrefix}addusr 
│ ◦ ${usedPrefix}addusr2
│ ◦ ${usedPrefix}addusr3
│ ◦ ${usedPrefix}createadmin
│ ◦ ${usedPrefix}addsrv
│ ◦ ${usedPrefix}detusr
│ ◦ ${usedPrefix}detsrv
│ ◦ ${usedPrefix}delusr
│ ◦ ${usedPrefix}delsrv
│ ◦ ${usedPrefix}ramlist
│ ◦ ${usedPrefix}infopanel
└ ◦ ${usedPrefix}webpanel

- *list Ram Yang Tersedia*
RAM YANG TERSEDIA :
1GB ✅
2GB ✅
3GB ✅
4GB ✅
5GB ✅
6GB ✅
7GB ✅
8GB ✅
10GB ✅
> .payment Untuk membeli

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕`
let menu = [
    '✅'
    ]
    conn.sendMessage(m.chat, {
    react: {
    text: `${menu}`,
    key: m.key,
    }})
let thumb = 'https://telegra.ph/file/7cb3bec502da45f49e016.jpg'

await conn.sendFile(m.chat, thumb, 'menu.jpg', `${chan}`, m)
}

handler.help = ['panel seller']
handler.tags = ['main']
handler.command = /^(menupanel|panelmenu)$/i

module.exports = handler