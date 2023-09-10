let handler = async(m, { conn }) => {
let pc = Object.entries(await conn.chats)
let niorg = pc.filter(([jid]) => jid.endsWith('@s.whatsapp.net'))
let thumbListpc = `https://telegra.ph/file/5c1f6a0fa2482a050529b.jpg`
let txt = ''
    for (let [jid] of niorg)
txt += `${htjava} ${await conn.getName(jid)}\n${'@' + jid.replace(/@.+/, '')}\n\n`
let chan = `${htki} *CHAT PRIVATE*  ${htka}` + `\n *Total:* ` + niorg.length + `\n\n` + txt + `${wm}`
return conn.sendFile(m.chat, thumbListpc, 'thumb.jpg', `${chan}`,  m)
}
handler.help = ['listpc']
handler.tags = ['info']
handler.command = /^listpc|pclist|daftarpc|pc$/i
handler.owner = true

module.exports = handler