let { tmpdir } = require('os')
let { join } = require('path')
let {
  readdirSync,
  statSync,
  unlinkSync,
  existsSync,
  readFileSync,
  watch
} = require('fs')
let handler = async (m, { conn, usedPrefix = _p, command, __dirname, args, text }) => {

let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!text) throw `File atau fitur mana yang di delete?\n\nexample:\n${usedPrefix + command} info`
    if (!ar1.includes(args[0])) return m.reply(`*Tidak Ditemukan*\n==================================\n\n${ar1.map(v => ' ' + v).join`\n`}`)
const file = join(__dirname, '../plugins/' + args[0] + '.js')
unlinkSync(file)
conn.reply(m.chat, `Succes deleted "plugins/${args[0]}.js`, m)
    
}
handler.help = ['df']
handler.tags = ['owner']
handler.command = /^(df)$/i

handler.mods = true

module.exports = handler