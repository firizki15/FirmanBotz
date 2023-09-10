let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/art?apikey=ZXcoderiD', 'hentai.mp4', '© ZXcoderiD', m)
}
handler.help = ['hentai']
handler.tags = ['hentai']

handler.command = /^(hentai|bdsm)$/i
handler.premium = true
handler.register = true
handler.limit = 5
module.exports = handler