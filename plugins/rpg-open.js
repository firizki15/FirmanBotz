let fetch = require('node-fetch')
let fs = require('fs')
const tfinventory = {
  others: {
    money: true,
  },
  tfitems: {
    potion: true,
    trash: true,
    wood: true,
    rock: true,
    string: true,
    emerald: true,
    diamond: true,
    gold: true,
    iron: true,
  },
  tfcrates: {
    common: true,
    uncommon: true,
    mythic: true,
    legendary: true,
    
  },
  tfpets: {
    horse: 100,
    cat: 100,
    fox: 100,
    dog: 100,
  }
}
const rewards = {
    common: {
        money: 101,
        trash: 11,
        potion: [0, 1, 0, 1, 0, 0, 0, 0, 0],
        common: [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
        uncommon: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    uncommon: {
        money: 201,
        trash: 31,
        potion: [0, 1, 0, 0, 0, 0, 0, 0],
        diamond: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        common: [0, 1, 0, 0, 0, 0, 0, 0, 0],
        uncommon: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        mythic: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        wood: [0, 1, 0, 0, 0, 0],
        rock: [0, 1, 0, 0, 0, 0],
        string: [0, 1, 0, 0, 0, 0]
    },
    mythic: {
        money: 301,
        exp: 50,
        trash: 61,
        potion: [0, 1, 0, 0, 0, 0],
        emerald: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        diamond: [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        gold: [0, 1, 0, 0, 0, 0, 1, 0, 0],
        iron: [0, 1, 0, 0, 0, 0, 0, 0],
        common: [0, 1, 0, 0, 0, 0],
        uncommon: [0, 1, 0, 0, 0, 0, 0, 0],
        mythic: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        legendary: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        pet: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        wood: [0, 1, 0, 0, 0],
        rock: [0, 1, 0, 0, 0],
        string: [0, 1, 0, 0, 0]
    },
    legendary: {
        money: 401000,
        exp: 500000,
        trash: 101000000,
        potion: [1, 1, 0, 0, 0],
        emerald: [1, 0, 0, 0, 0, 1 ,0, 0, 1, 0],
        diamond: [1, 0, 1, 0, 0, 1, 0, 1, 0, 0],
        gold: [0, 1, 0, 0, 0, 0, 0, 0],
        iron: [0, 1, 0, 0, 0, 0, 0],
        common: [0, 1, 0, 0],
        uncommon: [0, 1, 0, 0, 0, 0],
        mythic: [0, 1, 0, 0, 0, 0, 1, 0, 0],
        legendary: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        pet: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
        wood: [0, 1, 0, 0],
        rock: [0, 1, 0, 0],
        string: [0, 1, 0, 0]
    },
}
let handler = async (m, { command, args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    const tfcrates = Object.keys(tfinventory.tfcrates).map(v => user[v] && `⮕ ${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n').trim()
    let listCrate = Object.fromEntries(Object.entries(rewards).filter(([v]) => v && v in user))
    let info = `🧑🏻‍🏫 ᴜsᴇʀ: *${user.registered ? user.name : conn.getName(m.sender)}*

🔖 ᴄʀᴀᴛᴇ ʟɪsᴛ :
${Object.keys(tfinventory.tfcrates).map(v => user[v] && `⮕ ${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n')}
––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
⮕ ᴏᴩᴇɴ ᴄʀᴀᴛᴇ:
${usedPrefix}open [crate] [quantity]
★ ᴇxᴀᴍᴩʟᴇ:
${usedPrefix}open mythic 3
`.trim()
    let type = (args[0] || '').toLowerCase()
    let imgr = './thumbnail.jpg'
    let count = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!(type in listCrate)) return await conn.reply(m.chat, info, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: global.wm, 
    body: 'SUBSCRIBE YT Firmanbotz',  
    sourceUrl: sgc, 
    thumbnail: fs.readFileSync('./thumbnail.jpg')
      }}
     })
    /*let infox = `
Your *${rpg.emoticon(type)}${type} crate* is not enough!, you only have ${user[type]} *${rpg.emoticon(type)}${type} crate*
type *${usedPrefix}buy ${type} ${count - user[type]}* to buy
`*/
    if (user[type] < count) return await m.reply('FITUR DALAM PENGEMBANGAN')
    // TODO: add pet crate
    // if (type !== 'pet')
    let crateReward = {}
    for (let i = 0; i < count; i++)
        for (let [reward, value] of Object.entries(listCrate[type]))
            if (reward in user) {
                const total = value.getRandom()
                if (total) {
                    user[reward] += total * 1
                    crateReward[reward] = (crateReward[reward] || 0) + (total * 1)
                }
            }
    user[type] -= count * 1
    m.reply(`
You have opened *${count}* ${global.rpg.emoticon(type)}${type} crate and got:
${Object.keys(crateReward).filter(v => v && crateReward[v] && !/hai/i.test(v)).map(reward => `
*${global.rpg.emoticon(reward)}${reward}:* ${crateReward[reward]}
`.trim()).join('\n')}
`.trim())
    
}
handler.help = ['open'].map(v => v + ' [crate] [count]')
handler.tags = ['rpg']
handler.command = /^(open|buka|gacha)$/i
handler.register = true
handler.group = true
handler.rpg = true
module.exports = handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}