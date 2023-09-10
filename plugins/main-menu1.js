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
    
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let { pasangan, number, limit, exp, money, bank, lastclaim, premiumDate, premium, registered, regTime, age, level, role } = global.db.data.users
// Kata
let kata = `${pickRandom('Semangat!', 'Jangan menyerah!')}`
let chann = `Halo kak ${name}👋, Aku adalah Bot WhatsApp Yang bisa membantu kakak untuk beraktivitas.

Saya di Deploy oleh ${global.nameown}, *Jika ingin membuka menu silahkan kirim .menulist*
*GRUP OFFICIAL* : ${global.sgc}

┌◦ Name: ${name}
│◦ Number: ${m.sender.split('@')[0]}
│◦ Owner Number: ${global.nomorown}
│◦ Owner Name : ${global.nameown}
│◦ Bot Name: ${global.author}
│◦ Time: ${wib} WIB
└◦ Runtime : ${uptime}

❏ *O W N E R - ${global.nameown}*
*INI LIST STORE ${global.author}* 

${global.liststore}
`
let menu = [
    ''
    ]
    conn.sendMessage(m.chat, {
    react: {
    text: `${menu}`,
    key: m.key,
    }})
    // FAKE KONTAK
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${global.nameown}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Zenss,;;;\nFN:ZenssCuyy\nitem1.TEL;waid=${global.nomorown}:62895604670507\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
    
// by ichanzx
let thumbn = './thumbnail.jpg'
let wel = `https://api.lolhuman.xyz/api/welcomeimage?apikey=ZXcoderiD&img=https://i.postimg.cc/FRJhZ3bf/thumbnail.jpg&text=${name}`
let res = `https://api.lolhuman.xyz/api/attp?apikey=ZXcoderiD&text=${global.author}`
conn.sendFile(m.chat, thumbn, 'menu.jpg', `${chann}`, m)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(|menustore|storelist)$/i
handler.register = true

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
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const rand = [
    "https://telegra.ph/file/f7d810872d1ee8f5c51f3.jpg",
    "https://telegra.ph/file/5ceb0e5899d20cdc4d27c.jpg",
    "https://telegra.ph/file/13bba887309863abd213a.jpg",
    "https://telegra.ph/file/0800124a771ed60541bc5.jpg",
    "https://telegra.ph/file/f0461d0f223148ecd0f7a.jpg",
    "https://telegra.ph/file/5ceb0e5899d20cdc4d27c.jpg",
    "https://telegra.ph/file/0800124a771ed60541bc5.jpg"
]