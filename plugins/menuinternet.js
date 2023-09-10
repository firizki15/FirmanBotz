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
let dann = '乂 *Menampilkan Menu Internet*\n\n\n• .ai2\n• .aiturbo\n• .alkitab <pencarian>\n• .bkpindo <query>  (Ⓟ)\n• .bkpsearch <query>  (Ⓟ)\n• .brainly <soal> (Ⓛ)\n• .cecan (Ⓛ)\n• .cekapikeu\n• .ceritahoror\n• .cerpen (Ⓛ)\n• .codstalk (Ⓛ)\n• .aidraw (Ⓛ)\n• .facedetect <url> (Ⓛ)\n• .get <url> (Ⓛ)\n• .infogempa (Ⓛ)\n• .gempa (Ⓛ)\n• .let <url> (Ⓛ)\n• .gimage <search> (Ⓛ) (Ⓟ)\n• .githubstalk (Ⓛ)\n• .google <search> (Ⓛ)\n• .growiki\n• .growstock\n• .happymod <query>\n• .heroml <nama hero>\n• .igstalk <username> (Ⓛ)\n• .jadwalbola (Ⓛ)\n• .katabijak <opsi>\n• .kbbi <kata> (Ⓛ)\n• .coffee\n• .kopi\n• .layarkaca <query>\n• .dnslookup\n• .hackertarget\n• .lookup\n• .dns\n• .lirik <song name>\n• .peta <wilayah> (Ⓛ)\n• .minecraf\n• .moddroid\n• .musik\n• .neko (Ⓛ)\n• .nomorhoki <Apa> (Ⓛ)\n• .otakudesu\n• .pinterest <text> (Ⓛ)\n• .playstore (Ⓛ)\n• .puisi (Ⓛ)\n• .tebakumur <nama> (Ⓛ)\n• .waifu (Ⓛ)\n• .wikipedia <text> (Ⓛ)\n• .xnxxsearch\n• .xnxxdown\n• .ytcomment <comment>'
let menu = [
    '🗿'
    ]
    conn.sendMessage(m.chat, {
    react: {
    text: `${menu}`,
    key: m.key,
    }})
let thumb = './thumbnail.jpg'

conn.sendFile(m.chat, thumb, 'menu.jpg', `${dann}`, m)
}
handler.help = ['menuinternet']
handler.tags = ['main']
handler.command = /^(menuinternet|help)$/i
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