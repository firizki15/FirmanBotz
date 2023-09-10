let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = `${global.qris}`
let dann =
` ==== • *QRIS ALL PAYMENT* • ====
Scan diatas untuk memproses pembelian anda
konfirmasi Screenshot Bukti Kirim Ke⤵️

https://wa.me/${global.nomorown}
${global.sig}

`
 await conn.sendFile(m.chat, qris, 'qris.jpg', `${dann}`, m,)
}

handler.help = ['payment', 'pembayaran']
handler.tags = ['info', 'tools']
handler.command = /^(payment|pembayaran)$/i
module.exports = handler