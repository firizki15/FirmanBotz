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

  //let pp = await conn.updateProfilePicture(who)
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let { pasangan, limit, exp, money, bank, lastclaim, premiumDate, premium, registered, regTime, age, level, role } = global.db.data.users
// Kata
    let _uptime = process.uptime() * 1000  
          let uptime = clockString(_uptime)
let kata = `${pickRandom('Semangat!', 'Jangan menyerah!')}`
let men = 'Tunggu sebentar menu loading......'
let chann = `┌─❖ *OPTIONS MENU*
│ Hi 👋 
└┬❖  ${name}
┌┤✑  ${ucapan()}
│└────────────┈ ⳹
│
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊        
│𝗦𝗽𝗲𝗲𝗱 : 0.0008 miliseconds
│𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${uptime}
│𝗕𝗼𝘁 : ${global.author}
│𝗢𝘄𝗻𝗲𝗿 𝗡𝗼: ${global.nomorown}
│𝗣𝗿𝗲𝗳𝗶𝘅 :  PREFIX 
│𝗠𝗼𝗱𝗲 : Public
│𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : 192e91d1-45c5-4a2f-9063-a6bfc391e4cb
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : linux
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝗡𝗮𝗺𝗲 : ${name}
│𝗡𝘂𝗺𝗯𝗲𝗿 : ${m.sender.split('@')[0]}
│𝗣𝗿𝗲𝗺𝗶𝘂𝗺 : ${global.db.data.users[who].premium ? '✅' : '❌'}
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝗧𝗶𝗺𝗲 : ${wib} WIB
│𝗗𝗮𝘁𝗲 : ${date}
└┬────────────┈ ⳹
   │✑  Please Type The MENU
   │✑  *Credits ${global.wm}*
┌└─────────────┈ ⳹
│❏.allmenu
│❏.menugroup
│❏.menumain
│❏.menusticker
│❏.menukerang
│❏.menudownload
│❏.menuinternet
│❏.menuanonym
│❏.menuowner
│❏.menurpg
│❏.menubug
│❏.menugame
│❏.menuquote
│❏.menusound
└─────────────────┈ ⳹`
let menu = [
    '🤖'
    ]
    conn.sendMessage(m.chat, {
    react: {
    text: `${menu}`,
    key: m.key,
    }})
 //FAKE KONTAK ICHAN
 const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${global.nameown}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Zenss,;;;\nFN:ZenssCuyy\nitem1.TEL;waid=${global.nomorown}:62895604670507\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
    
// by ichanzx
let thumb1 = './thumbnail.jpg' // gambar tampilan menu default
let wel = `https://api.lolhuman.xyz/api/welcomeimage?apikey=ZXcoderiD&img=https://i.postimg.cc/FRJhZ3bf/thumbnail.jpg&text=${name}` // gambar apikey
let res = `https://api.lolhuman.xyz/api/attp?apikey=ZXcoderiD&text=${global.author}`
let Chan = 'https://api.lolhuman.xyz/api/random/sfw/awoo?apikey=ZXcoderiD'
await conn.reply(m.chat, `${men}`, fkontak)
conn.sendMessage(m.chat, {
text: chann,
contextInfo: {
externalAdReply: {
title: date,
body: wm,
thumbnailUrl: 'https://telegra.ph/file/5fe7e9cf32ea3a120195b.jpg',
sourceUrl: `${global.sgc}`,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menulist|listmenu)$/i
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
  let res = "Dini kak 🌆"
  if (time >= 4) {
    res = "Pagi Kak 🌅"
  }
  if (time >= 10) {
    res = "Siang kak 🏙️"
  }
  if (time >= 15) {
    res = "Sore kak 🌄"
  }
  if (time >= 18) {
    res = "Malam Kak 🌃"
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