/*
     * YT FirmanBotz 
     * Instagram: @firmann.store
*/

const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
const moment = require("moment-timezone")
let levelling = require('../lib/levelling')
let { platform } = require('node:process')
let os = require('os')
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

let tags = {
  'rpgabsen': '*Menu Rpg*',
  'rpg': '*Rpg*',
  'game': '*Menu Game*',
  'xp': '*Exp & Limit*',
  'asupan': '*Asupan Prem Mode*',
  'sticker': '*Menu Stiker*',
  'main': '*Menu Main*',
  'kerang': '*Kerang Ajaib*',
  'quotes': '*Quotes Menu*',
  'admin': '*Menu Admin*',
  'group': '*Menu Group*',
  'internet': '*Menu Internet*',
  'anonymous': '*Menu Anonymous*',
  'downloader': '*Menu Downloader*',
  'berita': '*Menu Berita*',
  'tools': '*Menu Tools*',
  'fun': '*Menu Fun*',
  'database': '*Menu Database*', 
  'vote': '*Menu Voting*',
  'absen': '*Menu Absen*',
  'catatan': '*Menu Catatan*',
  'jadian': '*Menu Jadian*',
  'islami': '*Menu Islami*',
  'owner': '*Menu Owner*',
  'advanced': '*Menu Advance*',
  'info': '*Menu Info*',
  'audio': '*Menu Audio*',
  'maker': '*Menu Maker*',
}
const defaultMenu = {
  before: `
◈ ━━━━━ *INFO BOTZ* ━━━━━ ◈

*FirmanBotz* ᴀᴅᴀʟᴀʜ ᴘʀᴏɢʀᴀᴍ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʏᴀɴɢ ꜱɪᴀᴘ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ ᴅᴀʟᴀᴍ ᴍᴇʟᴀᴋᴜᴋᴀɴ ʙᴇʀʙᴀɢᴀɪ ᴛɪɴᴅᴀᴋᴀɴ, ᴍᴇɴᴄᴀʀɪ ᴅᴀᴛᴀ ᴀᴛᴀᴜ ɪɴꜰᴏʀᴍᴀꜱɪ ᴍᴇʟᴀʟᴜɪ ᴡʜᴀᴛꜱᴀᴘᴘ.
 
👋🏻 _ʜᴀʟᴏ_ *%name*
🧿 ʟᴇᴠᴇʟ : *%level* 
👥 ᴛᴏᴛᴀʟ ᴜꜱᴇʀ : %totalreg
📈 ᴜᴘᴛɪᴍᴇ : %muptime 
─────────────
ʜᴀʟᴏ *%name* ᴀᴅᴀ ʏᴀɴɢ ʙɪꜱᴀ ꜱᴀʏᴀ ʙᴀɴᴛᴜ?
ᴋᴇᴛɪᴋ *.ᴏᴡɴᴇʀ* ᴜɴᴛᴜᴋ ᴍᴇɴʏᴇᴡᴀ ʙᴏᴛ ᴀᴛᴀᴜ ᴋᴇᴘᴇʀʟᴜᴀɴ ʟᴀɪɴɴʏᴀ, ᴛᴇʀɪᴍᴀ ᴋᴀꜱɪʜ
─────────────
%readmore
Ⓛ = Limit / Diamonds
Ⓟ = Premium 
-----  -----  -----  -----  -----
  ≡ *DAFTAR MENU*
`.trimStart(),
  header: '┌─⊷ %category',
  body: '▢ %cmd %islimit %isPremium',
  footer: '└───────────\n',
  after: `SIMPEL BOT WHATSAPP BY FirmanBotz
Copyright : @WhatsApp
© 2023 - YT FirmanBotz 
`,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    const dd = new Date('2023-01-01');
    const locales = 'en';
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)

// Platform Informasi
const platform = os.platform();
const arch = os.arch();
const release = os.release();
const totalMem = os.totalmem() / (1024 * 1024 * 1024);
const freeMem = os.freemem() / (1024 * 1024 * 1024);

// Platform
const platformInfo = `${platform}`;

// Informasi
const infomem = `Architecture ${arch}, ${release}`;

// Total Memori
const totalmem = `${totalMem.toFixed(2)} GB`;

// Free memori
const freemem = `${freeMem.toFixed(2)} GB`;

// Define the target date
   const targetDate = new Date('January 1, 2024 00:00:00');
// Define the current date
   const currentDate = new Date();
// Calculate the remaining time in milliseconds
   const remainingTime = targetDate.getTime() - currentDate.getTime();
// Convert milliseconds to days, hours, minutes, and seconds
   const seconds = Math.floor(remainingTime / 1000) % 60;
   const minutes = Math.floor(remainingTime / 1000 / 60) % 60;
   const hours = Math.floor(remainingTime / 1000 / 60 / 60) % 24;
   const days = Math.floor(remainingTime / 1000 / 60 / 60 / 24);
// Tampilkan Tahun Baru
    let dateCountdown = `${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik lagi menuju tahun baru!`;
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Ⓛ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      ucapan: ucapan(),
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, dateCountdown, wib, wit, wita, time, totalmem, totalreg, rtotalreg, platformInfo, freemem, infomem, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await m.reply('Tunggu Sebentar...')
// Fake Contact
 const fcon = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactMessage": { "title":"sri","h": `haloo`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
	}
    let thumb = 'https://telegra.ph/file/44aa43b95127bb1848a12.jpg'
    let menu = [
    '🗿'
    ]
    conn.sendMessage(m.chat, {
    react: {
    text: `${menu}`,
    key: m.key,
    }})
    //conn.sendButton(m.chat, text.trim(),"2023 © Firmanbotz", await (await fetch(thumb)).buffer(), [['Owner', '.owner'],['Donasi', '.donasi'],['Speed', '.speed']], true, { quoted: m })
    conn.sendMessage(m.chat, {
text: `${text}`,
contextInfo: {
externalAdReply: {
title: `${ucpn} 👋${name}`,
body: wm,
thumbnailUrl: 'https://telegra.ph/file/44aa43b95127bb1848a12.jpg',
sourceUrl: `${global.sgc}`,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = /^(menu|allmenu|help2|\?)$/i

handler.register = true
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
        const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'Pagi kak'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Pagi kak'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = 'Siang kak'
        } else if (hour_now >= '15' && hour_now <= '17') {
          ucapanWaktu = 'Sore kak'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Selamat Petang kak'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Malam kak'
        } else {
          ucapanWaktu = 'Selamat Malam!'
        }	
        return ucapanWaktu
}
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const rand = [
    "https://telegra.ph/file/8813270910b3db0caf3c5.jpg",
    "https://telegra.ph/file/f8188362557a0e15dc991.jpg",
    "https://telegra.ph/file/f27960f15c9fdbadf1248.jpg",
    "https://telegra.ph/file/195f7f8832fa7c49bfeb9.jpg"
]