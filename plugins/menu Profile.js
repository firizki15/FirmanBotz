const moment = require("moment-timezone");
const fs = require("fs");
const fetch = require("node-fetch");
const jimp = require("jimp");
const PhoneNumber = require("awesome-phonenumber");
let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, usedPrefix: _p, __dirname, text, command }) => {
let name = await conn.getName(m.sender)
let ucpn = `${ucapan()}`

	// Date
function msToDate(ms) {
  temp = ms
  days = Math.floor(ms / (24*60*60*1000));
  daysms = ms % (24*60*60*1000);
  hours = Math.floor((daysms)/(60*60*1000));
  hoursms = ms % (60*60*1000);
  minutes = Math.floor((hoursms)/(60*1000));
  minutesms = ms % (60*1000);
  sec = Math.floor((minutesms)/(1000));
  return days+"H "+hours+"J "+ minutes + "M";
}

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
    
    let pp = './src/avatar_contact.png'
    
    var hl = []
  hl[0] = text.split('|')[0]
  hl[0] = (hl[0]) + "@s.whatsapp.net"
  hl[1] = text.split('|')[1]
    
    var jumlahHari = 86400000 * hl[1]
  // var jumlahHari = 1000 * text

// Kata
let kata = `${pickRandom('Semangat!', 'Jangan menyerah!')}`
let dann = `乂  *U S E R - P R O F I L E*

	◦ *Name* : ${name}
    ◦ *Nomor* : ${m.sender.split('@')[0]}
	◦ *Limit* : ${global.db.data.users[who].limit}
	◦ *Level* : ${global.db.data.users[who].level}
	◦ *Warning* : 0 / 5

乂  *U S E R - S T A T U S*

	◦ *Blocked* : ×
	◦ *Banned* : ×
	◦ *Use In Private* : √
	◦ *Premium* : ${global.db.data.users[who].premium ? 'Iya Dong Prem' : 'Awokwok Gratisan'}
	◦ *Expired* : ${msToDate(global.db.data.users[who].premiumDate - new Date() * 1)}

sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ɪᴄʜᴀɴᴢx ッ`
let menu = [
    '✅'
    ]
    conn.sendMessage(m.chat, {
    react: {
    text: `${menu}`,
    key: m.key,
    }})
let thumb = './thumbnail.jpg'

conn.sendFile(m.chat, thumb, 'menu.jpg', `${dann}`, m)
conn.sendFile(m.chat, './mp3/dann.mp3', '', null, m, true, { type: "audioMessage", ptt: true, fileLength: 88738 })
}
handler.help = ['me']
handler.tags = ['main']
handler.command = /^(me|myprofile|profile)$/i
handler.limit = true
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