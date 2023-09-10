let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/art?apikey=ZXcoderiD', 'neko.jpg', '© ZXcoderiD', m)
}
handler.help = ['neko']
handler.tags = ['neko']

handler.command = /^(neko|pedo)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler