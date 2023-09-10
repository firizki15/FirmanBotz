let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, args, command }) => {
	let type = (args[1] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    if (!args[0]) return m.reply('Apikeynya mana?')
  
  let cek = 'Mencari Apikey...'
try {
    if (/cekapi(key)?|cekkey/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
       case 'xteam':
       if (type == 'xteam') {
         let xteam = await (await fetch(`https://api.xteam.xyz/cekey?APIKEY=${args[0]}`)).json().catch(v => 'error')
         await m.reply(cek)
         if (xteam == 'error') {
m.reply(`Maaf restapi ini sedang error, harap coba lagi nanti`)
} else { 
if (xteam.response == "Only alphanumeric!") return m.reply('Only alphanumeric!')
 if (xteam.response == "Apikey tidak ditemukan, silahkan daftar atau beli ke developer untuk mendapatkan apikey yang valid!") return m.reply('Invalid Apikey!')
conn.reply(m.chat, `• *Type:* XTeam
• *Apikey:* ${args[0]}

• *Name:* ${xteam.response.name}
• *IP Address:* ${xteam.response.ip}
• *Email:* ${xteam.response.email}
• *Total Hit:* ${xteam.response.totalhit}
• *Premium:* ${xteam.response.premium}

• *Expired:* ${(xteam.response.expired).replace('Premium left:', '')}`, m)
}
}
            break
          case 'lolhuman': 
    let lol = await (await fetch(`https://api.lolhuman.xyz/api/checkapikey?apikey=${args[0]}`)).json()
    m.reply(cek)
    if (lol.message == 'success') {
    conn.reply(m.chat, `• *Type:* Lolhuman
• *Apikey:* ${args[0]}

• *Name:* ${lol.result.username}
• *Total Hit:* ${lol.result.requests}
• *Hit Today:* ${lol.result.today}
• *Account:* ${lol.result.account_type}

• *Expired:* ${lol.result.expired}`, m)
} else m.reply('Invalid Apikey !')
            break
          default:
            return conn.sendButton(m.chat, `*${htki} CEK APIKEY ${htka}*`, 'Select Button Here', null, [['XTeam', `.cekapi ${args[0]} xteam`],['Lolhuman', `.cekapi ${args[0]} lolhuman`]],m)
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, wm, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}
handler.help = ['cekapikey']
handler.tags = ['internet', 'tools']
handler.command = /^(cek(key|api))$/i

module.exports = handler