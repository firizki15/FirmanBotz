var fetch = require('node-fetch');
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
await m.reply(wait)
  var apii = await fetch(`https://restapis.zxcoderid.xyz/api/others/chatgpt?q=${text}&apikey=Ichanzx`)
  var js = await apii.json()
  await m.reply(js.data)
}      
handler.command = handler.help = ['ai2','aiturbo','chatgpt','openai'];
handler.tags = ['internet','tools'];
handler.premium = false
module.exports = handler;