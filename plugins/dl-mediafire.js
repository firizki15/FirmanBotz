let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
	if (!args[0]) throw 'Masukan Link\nExample: *.mf https://www.mediafire.com/file/pwxob70rpgma9lz/GBWhatsApp_v8.75%2528Tutorial_Yud%2529.apk/file*' 
	if (!/https?:\/\/(www\.)?mediafire\.com/.test(args[0])) throw 'Linknya?' 
	m.reply(wait)
	let res = await fetch(`https://restapis.zxcoderid.xyz/api/downloader/mediafire?url=${args[0]}&apikey=${global.apichan}`)
	let data = await res.json()
let json = data.data
    conn.sendMessage(m.chat, { document: { url: json.url}, mimetype: 'document', fileName: `${json.title}`}, {quoted: m})
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i

module.exports = handler

/*
  * YT FirmanBotz l
  * Instagram: @firmann.store
*/