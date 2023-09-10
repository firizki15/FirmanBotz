let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/wallnime?apikey=ZXcoderiD', 'wall.jpg', '© ZXcoderiD', m)
}
handler.help = ['download']
handler.tags = ['wallpaper']

handler.command = /^(wallanime|wallpaper)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler