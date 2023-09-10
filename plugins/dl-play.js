let { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let fetch = require('node-fetch')
let yts = require('yt-search')
var hxz = require('hxz-api');
var handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Judulnya?`
  m.reply(wait)
  let search = await yts(text)
  let vid = search.videos[Math.floor(Math.random() * search.videos.length)]
  if (!search) throw 'Tidak Ditemukan'
  let { title, thumbnail, timestamp, views, ago, url } = vid

  let captvid = `╭──── 〔 Y O U T U B E 〕
• Judul: ${title}

• Durasi: ${timestamp}

• Views: ${views}

• Upload: ${ago}

• Link: ${url}

• Note: Untuk Video Ketik .ytv Masukan Link Atas
• Note: Untuk Audio Ketik .yta Masukan Link Atas

• Contoh: .yta ${url}
╰────────⬣`
conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: captvid }, m)
/*const yt = await await youtubedlv2(url).catch(async _ => await youtubedl(url)).catch(async _ => await youtubedlv3(url))
const link = await yt.audio['128kbps'].download()
  let res = await fetch(`https://api.lolhuman.xyz/api/ytaudio?apikey=IchanZX&url=${url}`)
  let data = await res.json()
  let json = data.result*/
    var cvr = await hxz.youtube(url)
    var sce = cvr.mp3
    
  let doc = { 
  audio: 
  { 
    url: sce
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

  await conn.sendMessage(m.chat, doc, m)
}
handler.help = ['youtubeplay'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(play|ytplay|playdl)$/i

module.exports = handler