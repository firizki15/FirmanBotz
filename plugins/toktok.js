var { tiktokdl, tiktokdlv2, tiktokdlv3 } = require('@bochilteam/scraper');
let fetch = ('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
        .catch(async _ => await tiktokdlv2(args[0]))
        .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw 'Can\'t download video!'
    conn.sendFile(m.chat, url, 'tiktok.mp4', `${htki} ᴛɪᴋᴛᴏᴋ ᴡᴍ ${htka}`, `➔ ɴɪᴄᴋɴᴀᴍᴇ ${nickname}${description ? `\n➔ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:\n${description}` : ''}`, m)
      
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(seticx)$/i

module.exports = handler
