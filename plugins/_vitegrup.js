let { GroupSettingChange } = require('@adiwajshing/baileys')
let handler = m => m

let badwordRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i // tambahin sendiri

handler.before = function (m, { isOwner, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return !0
    let chat = db.data.chats[m.chat]
    let user = db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)
     let isGroupLink = badwordRegex.exec(m.text)

    if (chat.linkdetect && isGroupLink) {
        user.warning += 0
        let thumb = './thumbnail.jpg'
        let dann = `*Link Invite terdeteksi!*
Mau sewa bot? silahkan chat owner ${global.nomorown}

*Pricelist ${global.nameown}* Ketik .store
Grup Komunitas : ${global.sgc}

Mau beli? ketik .payment dan tunggu orderan selesai. Jika ada kendala hubungi owner

© ${global.author}`

conn.sendFile(m.chat, thumb, 'badword.jpg', `${dann}`, m)
        if (user.warning >= 5) {
            user.banned = true
            if (m.isGroup) {
                if (isBotAdmin) {
                    // this.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
                }
            }
        }
    }
    return !0
}
module.exports = handler