let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("gta V roleplay","GTA ROLEPLAY","TRICKSTER GTA 5 HOPEFULLY","GTA 5").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"cih sipaling paipem",m))
   }
    
handler.help = ['fivem']
handler.tags = ['internet']
handler.command = /^(fivem)$/i
handler.limit = true

module.exports = handler