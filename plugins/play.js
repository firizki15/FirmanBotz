let fs = require('fs')
const { youtubeSearch, youtubedl, youtubedlv2, youtubedlv3 } =require('@bochilteam/scraper')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} naruto blue bird`
  await m.reply('Tunggu Sebentar...')
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Tidak di temukan, coba untuk membalikkan judul dan author nya'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId

  let captvid = `╭──── 〔 Y O U T U B E 〕 ─⬣
⬡ Judul: ${title}
⬡ Durasi: ${durationH}
⬡ Views: ${viewH}
⬡ Upload: ${publishedTime}
⬡ Link: ${vid.url}
╰────────⬣`
  conn.sendButton(m.chat, `╭──── 〔 Y O U T U B E 〕 ─⬣
⬡ Judul: ${title}
⬡ Durasi: ${durationH}
⬡ Views: ${viewH}
⬡ Upload: ${publishedTime}
⬡ Link: ${vid.url}
╰────────⬣`, wm.trim(), await( await conn.getFile(thumbnail)).data, [['Video', `.ytv ${vid.url}`]], false, { quoted: m, 'document': { 'url':'https://wa.me/+6283137550315' },
'mimetype': global.dpdf,
'fileName': `YouTube Play`,
'fileLength': 666666666666666,
'pageCount': 666,contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: `${url}`,
title: wm,
body: `Audio Sedang Dikirim...`,
sourceUrl: 'http://wa.me/+6283137550315', thumbnail: await ( await conn.getFile(thumbnail)).data
  }
 } 
})
  
  //let buttons = [{ buttonText: { displayText: '📽VIDEO' }, buttonId: `${usedPrefix}ytv ${url} 360` }]
 //let msg = await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: captvid, footer: author, buttons }, { quoted: m })

  const yt = await await youtubedlv2(url).catch(async _ => await youtubedl(url)).catch(async _ => await youtubedlv3(url))
const link = await yt.audio['128kbps'].download()
  let doc = { 
  audio: 
  { 
    url: link 
}, 
mimetype: 'audio/mp4', fileName: `${title}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: url,
title: title,
body: wm,
sourceUrl: url,
thumbnail: await(await conn.getFile(thumbnail)).data                                                                     
                                                                                                                 }
                       }
  }

//FAKEREPLY KONTAK
 const fcon = {
	 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactMessage": { "title":"sri","h": `haloo`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
	}

  return conn.sendMessage(m.chat, doc, { quoted: fcon })
	// return conn.sendMessage(m.chat, { document: { url: link }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted: m})
	// return await conn.sendFile(m.chat, link, title + '.mp3', '', m, false, { asDocument: true })
}
handler.help = ['playdl'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^playdll$/i

handler.exp = 0
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}