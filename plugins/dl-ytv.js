var { fg } = require('api-dylux')
let fetch = require('node-fetch')
var { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let limit = 350 
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
	if (!args || !args[0]) throw `✳️ Contoh :\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`
    if (!args[0].match(/youtu/gi)) throw `❎ Memverifikasi bahwa link YouTube`
	 let chat = global.db.data.chats[m.chat]
	 m.reply('Sorry Kalo Apikey Respon nya Lama') 
		/*let q = args[1] || '360p'
		let v = args[0]
		const yt = await youtubedl(v).catch(async () => await youtubedlv2(v)).catch(async () => await youtubedlv3(v))
		const dl_url = await yt.video[q].download()
		const title = await yt.title
		const size = await yt.video[q].fileSizeH */
			let res = await fetch(`https://api.lolhuman.xyz/api/ytvideo?apikey=IchanZX&url=${args}`)
 		    let data = await res.json()
            let json = data.result
    
     	let cap = `≡  *PLAY YTDL*
  
▢ *📌Titel* : ${json.title}
▢ *📟 Ext* : mp4
▢ *🎞️Kualitas* : ${json.link.type}
▢ *⚖️Size* : ${json.link.size}
`
	  conn.sendFile(m.chat, json.link.link, 'yt.mp4', `${cap}`, m)
    }

handler.help = ['mp4', 'v', ''].map(v => 'yt' + v + ` <url> <without message>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i

handler.exp = 0
handler.register = false
handler.limit = true


module.exports = handler