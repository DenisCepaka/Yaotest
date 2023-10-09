const fs = require('fs');
const autoresponsePath = './database/messresponse.json';

// Membaca data dari file saat aplikasi dimulai
let db_respon_list = JSON.parse(fs.readFileSync(autoresponsePath));



function updateResponseInList(guildid, key, response, db_respon_list) {
  let updated = false; // Menambahkan variabel penanda

  db_respon_list = db_respon_list.map(item => {
      if (item.id === guildid) {
          item.key = key; // Ganti dengan nilai yang baru
          item.message = response; // Ganti dengan nilai yang baru
          updated = true; // Item telah diperbarui
      }
      return item;
  });

  // Jika item belum ada, tambahkan item baru
  if (!updated) {
    db_respon_list.push({
      id: guildid,
      key: key,
      message: response
    });
  }

  fs.writeFileSync('./database/messresponse.json', JSON.stringify(db_respon_list, null, 3));

  return db_respon_list; // Mengembalikan nilai yang baru
}
function isAlreadyInResponseListGroup(guildid, autoresponse) {
  let found = false
  Object.keys(db_respon_list).forEach((x) => {
  if (autoresponse[x].id === guildid) {
  found = true
  }
  })
  return found
  }
exports.run = async (client, message, args) => {
  const guildId = message.guildId;
  const query = message.content.toLowerCase().slice(13);
  const key = query.split("|")[0];
  const response = query.split("|")[1];

  if (!query.includes("|")) return message.reply(`'Format salah! Gunakan ( | ) untuk memisahkan!`);

  if (!isAlreadyInResponseListGroup(guildId, db_respon_list)) {
    return message.reply(`Maaf, untuk key *${key}* belum terdaftar di group ini`);
  }

  // Panggil fungsi untuk memperbarui atau menambahkan data ke dalam list
  updateResponseInList(guildId, key, response, db_respon_list);
  message.reply(`Berhasil update List menu : **${key}**`);
};

exports.conf = {
  aliases: ['messupdate'],
};

exports.help = {
  name: "updatemess"
};
