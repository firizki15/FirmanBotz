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
let dann = '乂 *Menampilkan Menu Maker*\n\n• .amongus <text>\n• .animemiku (Ⓛ)\n• .akira\n• .akiyama\n• .anna\n• .asuna\n• .ayuzawa\n• .boruto\n• .chitanda\n• .chitoge\n• .deidara\n• .doraemon\n• .elaina\n• .emilia\n• .asuna\n• .erza\n• .gremory\n• .hestia\n• .hinata\n• .inori\n• .itachi\n• .isuzu\n• .itori\n• .kaga\n• .kagura\n• .kakasih\n• .kaori\n• .kaneki\n• .kosaki\n• .kotori\n• .kuriyama\n• .kuroha\n• .kurumi\n• .madara\n• .mikasa\n• .miku\n• .minato\n• .naruto\n• .natsukawa\n• .neko2\n• .nekohime\n• .nezuko\n• .nishimiya\n• .onepiece\n• .pokemon\n• .rem\n• .rize\n• .sagiri\n• .sakura\n• .sasuke\n• .shina\n• .shinka\n• .shizuka\n• .shota\n• .tomori\n• .toukachan\n• .tsunade\n• .yatogami\n• .yuki\n• .badgirl <text>\n• .carbon <text>\n• .deidara\n• .elaina (Ⓛ)\n• .gta <text> (Ⓛ) (Ⓟ)\n• .tahta <teks> (Ⓛ)\n• .iluminated <text>\n• .jadianime (Ⓛ)\n• .jadizombie (Ⓛ)\n• .ktp <text>\n• .manga  (Ⓟ)\n• .masturbation  (Ⓟ)\n• .megumin (Ⓛ)\n• .naruto <text>\n• .pubg <text>\n• .removebg (Ⓛ)\n• .sadboylogo <text|text>\n• .sagiri\n• .logolist <teks>  (Ⓟ)\n• .logo <teks>  (Ⓟ)\n• .togif <reply|media>\n• .toimg <reply|media> (Ⓛ)'
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
handler.help = ['menulogo']
handler.tags = ['main']
handler.command = /^(menulogo|help)$/i
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