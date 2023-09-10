let handler = async (m, { conn, text, usedPrefix, command }) => {

var chann = `Berikut ini adalah list Jasa Bot Wa dari *YT FirmanBotz* ⤵️\n

PRICELIST TOKO FIRMAN BOTZ :

══[「 SEWA BOT GRUP」]══♽
⛁: 1 Minggu Bot Dalam Grup
╰━━━☉ HARGA : 5.000
⛁: 1 Bulan Bot Dalam Grup
╰━━━☉ HARGA : 10.000
⛁: 1 Tahun Bot Dalam Grup
╰━━━☉ HARGA : 20.000
⛁: Permanen
╰━━━☉ HARGA : 50.000
━━━━━━━━━━━━━━━⬣

══[「 + Script No ENC 」]══♽
⛁: Script Cpanel + Bug
╰━━━☉ HARGA : 15.000
⛁: Script MD + Bug
╰━━━☉ HARGA : 10.000
⛁: Script Campuran 
╰━━━☉ HARGA : 10.000
⛁: Script push kontak 
╰━━━☉ HARGA : 5.000

*+Script Jika Erorr Langsung Komplain Ke Owner biar langsung di Fix
━━━━━━━━━━━━━━━⬣

═══[「 JASA RUN 」]═══♽
⛁: 1 Minggu Jadi Bot
╰━━━☉ HARGA : 10.000
⛁: 1 Bulan Jadi Bot
╰━━━☉ HARGA : 15.000
⛁: 1 Tahun Jadi Bot
╰━━━☉ HARGA : 30.000

*apa itu jasa run? Jasa ini adalah untuk menjalankan bot menggunakan nomor WhatsApp kalian yang ingin dijadikan bot,  
tinggal scan aja di WhatsApp yang ingin kalian jadikan bot. 
━━━━━━━━━━━━━━━⬣

═══[「 INPO ADMIN 」]═══♽
• Owner : FirmanBotz
• wa.me/6281325189642
━━━━━━━━━━━━━━━⬣

==========================

KEUNTUNGAN?
❐ TIDAK BOROS KOUTA & MEMORI
❐ BISA RUN 24 JAM
❐ WEBSITE DI CLOSE BOT TETAP JALAN
❐ FAST RESPON [SERVER BARU]

MINAT? CHAT : 
wa.me/6281325189642

Jadilah Pembeli Yang Bijak
Pelanggan Senang Kami Ikut senang😅

Keep Calculations In Buying😊
https://chat.whatsapp.com/HI7jj3QpDuvIsP53aKwitq

• Website :
https://firmanbotzz.my.id/mylink
conn.sendFile(m.chat, pickRandom(rand), 'store.jpg', `${chann}`, m)
}

handler.help = ['listpanel']
handler.tags = ['main']
handler.command = /^(store)$/i

module.exports = handler
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const rand = [
    "https://telegra.ph/file/8813270910b3db0caf3c5.jpg",
    "https://telegra.ph/file/f8188362557a0e15dc991.jpg",
    "https://telegra.ph/file/f27960f15c9fdbadf1248.jpg",
    "https://telegra.ph/file/195f7f8832fa7c49bfeb9.jpg"
]