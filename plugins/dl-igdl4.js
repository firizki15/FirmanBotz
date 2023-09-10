const api = require('api-dylux')
let handler = async (m, { conn, args, command, usedPrefix }) => {
    if (!args[0]) throw `Masukkan Url Instagram\nExample : ${ usedPrefix + command} https://www.instagram.com/ `
    try {
    await m.reply('Tunggu Sebentar...')
    api.igdl(!args[0])
    .then(res => conn.sendFile(m.chat, res.url_list, 'igdl.mp4', m))
    .catch(console.error);
   }
}
handler.help = ['igdl5'].map(v => v + ' <url>')
handler.command = /^(igdl5|ctxig)$/i
handler.tags = ['downloader']
handler.limit = true
module.export = handler