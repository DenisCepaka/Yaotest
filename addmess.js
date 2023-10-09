const {EmbedBuilder} = require("discord.js");
const fs = require ('fs')
const crypto = require('crypto')

exports.run = async (client, message, args) => {

	
	const userid = message.author.id

const _registered = JSON.parse(fs.readFileSync('./database/stiker.json'))
	/**
 * add user to db
 * @param {String} userid 
 * @param {String} messname 
 * @param {String} message 
 * @param {String} serial
**/
const createSerial = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size)
}
const addRegistered = (userid, messname, message, serial) => {
const obj = { 
id: userid, 
messname: messname, 
message: message, 
serial: serial
	}
    _registered.push(obj)
    fs.writeFileSync('./database/stiker.json', JSON.stringify(_registered, null, 3))
}


				    const huu = message.content.slice(10)
					const serialExp = createSerial(6)
					const namaMess = huu.substring(0, huu.indexOf('|') - 0)
					const mess = huu.substring(huu.lastIndexOf('|') + 1)
					if (!huu.includes('|')) return message.reply('Format salah! Gunakan ( | ) untuk memisahkan!')
					// if (!linkStc.match(`https://cdn.discordapp.com/attachments/`)) return message.reply(`Format salah! Gunakan link setelah \`nama|link\``)
					for (const data of _registered) {
						if (huu.startsWith(data.messname)) {
						return message.reply('Nama ini sudah digunakan!!, ganti nama lain')};
					  } 
					  
					
					
						addRegistered(userid, namaMess, mess, serialExp)
						message.reply(`Sukses, Kata ${namaMess} Telah Ditambahkan ke database\nId: ${userid}\nMessage:${mess}`)
};
exports.conf = {
	aliases: ['messadd']
  };
  
  exports.help = {
	name: "addmess"
  };
				