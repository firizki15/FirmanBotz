const moment = require("moment-timezone");
const fs = require("fs");
const fetch = require("node-fetch");
const jimp = require("jimp");
const PhoneNumber = require("awesome-phonenumber");
let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, usedPrefix: _p, __dirname, text, command }) => {
let name = await conn.getName(m.sender)
let ucpn = `${ucapan()}`

    // Time
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh}:${wibm}:${wibs}`
   
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

// Kata
let kata = `${pickRandom('Semangat!', 'Jangan menyerah!')}`
let dann = '乂 *Menampilkan Menu Tools*\n\n• .ai2\n• .aiturbo\n• .anonfiles <media> <nama file>\n• .apk <search>\n• .🗿 <nomer/jumlah>  (Ⓟ)\n• .buggc\n• .bugmenu\n• .cartoon  (Ⓟ)\n• .cekapikey\n• .codstalk (Ⓛ)\n• .aidraw (Ⓛ)\n• .del (Ⓛ)\n• .delete (Ⓛ)\n• .font <text> (Ⓛ)\n• .styletext <text> (Ⓛ)\n• .infogempa (Ⓛ)\n• .gempa (Ⓛ)\n• .gitclone <url> (Ⓛ)\n• .enhancer\n• .stalkff (Ⓛ)\n• .hdr\n• .colorize\n• .jadibot  (Ⓟ)\n• .jadikatalog\n• .jadilokasi\n• .kalkulator <soal> (Ⓛ)\n• .listbuggc <link>  (Ⓟ)\n• .mlstalk (Ⓛ)\n• .mycontact (Ⓛ)\n• .ngl  (Ⓟ)\n• .npmsearch\n• .encrypt\n• .ocr (Ⓛ)\n• .totext (Ⓛ)\n• .payment\n• .pembayaran\n• .presetmenu\n• .qr <teks> (Ⓛ)\n• .qrcode <teks> (Ⓛ)\n• .rate\n• .readmore <teks>|<teks> (Ⓛ)\n• .remini <width> <height> <reply|caption>\n• .renungan (Ⓛ)\n• .resize <width> <height> <reply|caption>\n• .santet\n• .q (Ⓛ)\n• .sendbug <nomor>  (Ⓟ)\n• .sendtroli <nomor>  (Ⓟ)\n• .spamcall <nomor> (Ⓛ) (Ⓟ)\n• .status\n• .statusbot\n• .berhenti\n• .stopjadibot\n• .tinyurl <link> (Ⓛ)\n• .upload <reply|media>\n• .tourl <reply|media>\n• .translate\n• .ceknomor\n• .truecaller\n• .tts <lang> <teks> (Ⓛ)\n• .wait <caption|reply>\n• .wastalk\n• .weather\n• .whois\n• .whoislookup\n• .yts <pencarian> (Ⓛ)\n• .ytsearch <pencarian> (Ⓛ)\n• .ytstalk <channel>\n• .youtubestalk <channel>\n• .zodiac 2002 02 25'
let menu = [
    '🥶'
    ]
    conn.sendMessage(m.chat, {
    react: {
    text: `${menu}`,
    key: m.key,
    }})
let thumb = './thumbnail.jpg'

conn.sendFile(m.chat, thumb, 'menu.jpg', `${dann}`, m)
}
handler.help = ['menusound']
handler.tags = ['main']
handler.command = /^(menusound|help)$/i
handler.register = false

module.exports = handler

// Function

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years️*\n',  mo, ' *Month*\n', d, ' *Days*\n', h, ' *Hours*\n', m, ' *Minute*\n', s, ' *Second*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Dini kak"
  if (time >= 4) {
    res = "Pagi kak"
  }
  if (time >= 10) {
    res = "Siang kak"
  }
  if (time >= 15) {
    res = "Sore kak"
  }
  if (time >= 18) {
    res = "Malam kak"
  }
  return res
}