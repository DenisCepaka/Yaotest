// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
// ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
// halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
// halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
// halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
// tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
// tips belajar penggunaan `` (backtick) pada javascript agar
// mudah dalam memasukan variabel ke dalam string
// tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)


// let nama = "", peran = "";

//code disini gunakan console.log untuk outputnya
// Variabel nama dan peran (ganti nilai sesuai keinginan)
// const nama = "denis";
// const peran = "";
// if (nama === "") {
//     console.log("Nama wajib diisi!");
// } else if (peran === "") {
//     console.log("Pilih Peranmu untuk memulai game.");
// } else {
//     if (peran === "Ksatria") {
//         console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
//     } else if (peran === "Tabib") {
//         console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`);
//     } else if (peran === "Penyihir") {
//         console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
//     } else {
//         console.log("Maaf, peran yang kamu pilih tidak ada.");
//     }
// }

// const fs = require ('fs')
// const stiker = JSON.parse(fs.readFileSync('./database/stiker.json'))
// for (const data of stiker) {    
//     console.log(data.sname)};
// const mess = [
//     {"id":"631091920654958648","messname":"Denis","message":"@denis.cepaka.cepiki","serial":"113fc6"},
//     {"id":"631091920654958648","messname":"P","message":"Pa Pe Pa Pe, Ngajak Berantem?:rage:","serial":"8b94fa"}
//   ];
  
//   // Misalkan Anda memiliki pesan yang ingin Anda periksa dalam variabel msg
//   const msg = "Denis K";
  
//   for (const data of mess) {
//     if (msg === (data.messname)) {
//       console.log(data.message);
//     }
//   }
// const db_respon_list = JSON.parse(fs.readFileSync('./database/messresponse.json'))
// for (let x of db_respon_list) {
// if (x.id === guildId) {
// arr_rows.push({
// name: x.key,
// desc: x.message
// })
// console.log(`List Autoresponse From **${guild}**\n${arr_rows}`);
// }
// }
// const fs = require('fs');
// const guildId = "1022421111247487068";
// const guild = "Denis";

// let db_respon_list = JSON.parse(fs.readFileSync('./database/test.json'));
// const query = `hallo|BCD`;

// function isAlreadyResponList(guildid, key, autoresponse) {
//     return autoresponse.some(item => item.id === guildid && item.key === key);
// }

// function isAlreadyResponListGroup(guildid, autoresponse) {
//     return autoresponse.some(item => item.id === guildid);
// }

// function updateResponList(guildid, key, response, db_respon_list) {
//     const foundIndex = db_respon_list.findIndex(item => item.id === guildid && item.key === key);
//     if (foundIndex !== -1) {
//         db_respon_list[foundIndex].message = response;
//         fs.writeFileSync('./database/test.json', JSON.stringify(db_respon_list, null, 3));
//     }
// }

// const keyResponse = query.split("|");
// if (keyResponse.length !== 2) {
//     return console.log('Format salah! Gunakan ( | ) untuk memisahkan!');
// }

// const key = keyResponse[0];
// const response = keyResponse[1];

// // if (isAlreadyResponList(guildId, key, db_respon_list)) {
// //     return console.log(`List Autorespon dengan key : \n\`\`\`\n${key}\n\`\`\`Sudah ada di Server **${guild}** ini.`);
// // }

// if (!isAlreadyResponListGroup(guildId, db_respon_list)) {
//     return console.log(`Maaf, untuk key *${key}* belum terdaftar di group ini`);
// }
// if (!isAlreadyResponListGroup(guildId, db_respon_list)) {
//     return console.log(`Maaf, untuk key *${response}* belum terdaftar di group ini`);
// }
// updateResponList(guildId, key, response, db_respon_list);
// console.log(`Berhasil update List menu : **${key}** dan Respons **${response}**`);

const fs = require('fs');
const guildId = "1022421111247487068";
const guild = "Denis";

let db_respon_list = JSON.parse(fs.readFileSync('./database/test.json'));
// Isi dalam nya db_respon_list
// [
//     {
//         "id": "1022421111247487068",
//         "key": "hallo",
//         "message": "BCD",
//         "attachment": false
//     }
// ]

const query = `siapa|gua`;

function isAlreadyResponList(guildid, key, message, autoresponse) {
    return autoresponse.some(item => item.id === guildid && item.key === key && item.message === message);
}

function isAlreadyResponListGroup(guildid, autoresponse) {
    return autoresponse.some(item => item.id === guildid);
}

function updateResponList(guildid, key, response, db_respon_list) {
    db_respon_list = db_respon_list.map(item => {
        if (item.id === guildid) {
            item.key = key; // Ganti dengan nilai yang baru
            item.message = response; // Ganti dengan nilai yang baru
        }
        return item;
    });

    fs.writeFileSync('./database/test.json', JSON.stringify(db_respon_list, null, 3));
}

const keyResponse = query.split("|");
if (keyResponse.length !== 2) {
    return console.log('Format salah! Gunakan ( | ) untuk memisahkan!');
}

const key = keyResponse[0];
const response = keyResponse[1];


// if (isAlreadyResponList(guildId, key, response, db_respon_list)) {
//     return console.log(`Maaf, untuk key *${key}* dan respons *${response}* belum terdaftar di group ini`);
// }

updateResponList(guildId, key, response, db_respon_list);
console.log(`Berhasil update List menu : **${key}** dan Respons **${response}**`);

console.log(db_respon_list); // Untuk memeriksa apakah db_respon_list telah diperbarui sesuai dengan ekspektasi

function updateResponList(guildid, key, response, db_respon_list) {
    db_respon_list = db_respon_list.map(item => {
        if (item.id === guildid) {
            item.key = key; // Ganti dengan nilai yang baru
            item.message = response; // Ganti dengan nilai yang baru
        }
        return item;
    });

    fs.writeFileSync('./database/messresponse.json', JSON.stringify(db_respon_list, null, 3));
}

const fs = require('fs');

const autoresponse = JSON.parse(fs.readFileSync('./database/messresponse.json'))
/**
 * add autorespond to database
 * @param {String} guildid 
 * @param {String} key
 * @param {String} response 
 * @param {String} attachment
**/
function addResponList(guildid, key, response, attachment) {

const respond = {
id: guildid,
key: key,
message: response,
attachment: attachment,
}
autoresponse.push(respond)
fs.writeFileSync('./database/messresponse.json', JSON.stringify(autoresponse, null, 3))
}

function getDataResponList(guildid, key, autoresponse) {
let position = null
Object.keys(autoresponse).forEach((x) => {
if (autoresponse[x].id === guildid && autoresponse[x].key === key) {
position = x
}
})
if (position !== null) {
return autoresponse[position]
}
}

function isAlreadyResponList(guildid, key, autoresponse) {
let found = false
Object.keys(autoresponse).forEach((x) => {
if (autoresponse[x].id === guildid && autoresponse[x].key === key) {
found = true
}
})
return found
}

function sendResponList(guildid, key, _dir) {
let position = null
Object.keys(_dir).forEach((x) => {
if (_dir[x].id === guildid && _dir[x].key === key) {
// x.message = x.message?.replaceAll(/\r\n/g, "\\n");
position = x
}
})
if (position !== null) {
return _dir[position].message
}
}

function isAlreadyResponListGroup(guildid, autoresponse) {
let found = false
Object.keys(autoresponse).forEach((x) => {
if (autoresponse[x].id === guildid) {
found = true
}
})
return found
}

function delResponList(guildid, key, autoresponse) {
let position = null
Object.keys(autoresponse).forEach((x) => {
if (autoresponse[x].id === guildid && autoresponse[x].key === key) {
position = x
}
})

if (position !== null) {
autoresponse.splice(position, 1)
fs.writeFileSync('./database/messresponse.json', JSON.stringify(autoresponse, null, 3))
}
}

function updateResponList(guildid, key, response, db_respon_list) {
    db_respon_list = db_respon_list.map(item => {
        if (item.id === guildid) {
            item.key = key; // Ganti dengan nilai yang baru
            item.message = response; // Ganti dengan nilai yang baru
        }
        return item;
    });

    fs.writeFileSync('./database/test.json', JSON.stringify(db_respon_list, null, 3));
}

module.exports = { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList }
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