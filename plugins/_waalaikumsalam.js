let handler = async (m, { conn }) => {
let thumb = 'https://telegra.ph/file/d59776ea4b0efb0879167.jpg'
let caption = `*Waalaikummussalam warahmatullahi wabarokatuh*


"Orang yang mengucapkan salam seperti ini maka ia mendapatkan 30 pahala, kemudian, orang yang dihadapan atau mendengarnya membalas dengan kalimat yang sama yaitu “Wa'alaikum salam warahmatullahi wabarakatuh” atau ditambah dengan yang lain (waridhwaana). Artinya selain daripada do'a selamat juga meminta pada Allah SWT"
`
// FAKE KONTAK
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${global.nameown}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Zenss,;;;\nFN:ZenssCuyy\nitem1.TEL;waid=${global.nomorown}:62895604670507\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}

await conn.reply(m.chat, `${caption}`, fkontak)
conn.sendFile(m.chat, './mp3/salam.mp3', '', null, m, true, { type: "audioMessage", ptt: true, fileLength: 88738 })
       }
       
handler.customPrefix = /^(assalamualaikum|Salom|salam)/i
handler.limit = false
handler.command = new RegExp
module.exports = handler