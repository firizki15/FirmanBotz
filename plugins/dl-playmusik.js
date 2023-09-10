let fetch = require('node-fetch')

let handler = async (m, { conn, command, text, usedPrefix }) => {
  m.reply(wait)
    let chan = `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`
  let cap = ` _*Nih Kak🤤*_
`
  conn.sendFile(m.chat, chan, 'asupan.mp4', `${cap}`, m)
  }

handler.command = handler.help = [
'sound1', 
'sound2', 
'sound3', 
'sound4', 
'sound5', 
'sound6', 
'sound7', 
'sound8', 
'sound9',
'sound10',
'sound12',
'sound13',
'sound14',
'sound15',
'sound16',
'sound17',
'sound18',
'sound19',
'sound20'
]
handler.tags = ['Sound Random']
handler.limit = 5
module.exports = handler
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const asupan = [
    'https://audio.jukehost.co.uk/3qMAr1a0Cd2iR070H3mTXzZ07q8FfbUw',
    'https://audio.jukehost.co.uk/aWLF5aEXzhwIaGYEh6qMdDsUoq3EQMBe',
    'https://audio.jukehost.co.uk/Pxju55QXs1hBMDy4k5j67q0kevvbPZIS',
    'https://audio.jukehost.co.uk/14vrIoG8PO8d0QIgDtjj12ZMkA41IRmD',
    'https://audio.jukehost.co.uk/hd6BGFPJcYWHMvqJBtv1NaxxIGaZJZbt'
]