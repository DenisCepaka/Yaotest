const fs = require('fs');
const autoresponsePath = './database/messresponse.json';

/**
 * Menambahkan autoresponse ke database
 * @param {String} guildId 
 * @param {String} key
 * @param {String} response 
 */
function addResponseToList(guildId, key, response) {
    let autoresponse = [];

    try {
        autoresponse = JSON.parse(fs.readFileSync(autoresponsePath));
    } catch (err) {
        console.error('Error reading autoresponse file:', err);
    }

    const respond = {
        id: guildId,
        key: key,
        message: response,
    };

    autoresponse.push(respond);

    try {
        fs.writeFileSync(autoresponsePath, JSON.stringify(autoresponse, null, 3));
    } catch (err) {
        console.error('Error writing autoresponse file:', err);
    }
}

function isAlreadyInResponseList(guildid, key) {
    let autoresponse = [];

    try {
        autoresponse = JSON.parse(fs.readFileSync(autoresponsePath));
    } catch (err) {
        console.error('Error reading autoresponse file:', err);
    }

    let found = false;

    Object.keys(autoresponse).forEach((x) => {
        if (autoresponse[x].id === guildid && autoresponse[x].key === key) {
            found = true;
        }
    });

    return found;
}

exports.run = async (client, message, args) => {
    if (!message.member || !message.member.permissions.has('ADMINISTRATOR')) return message.reply('Anda tidak memiliki izin untuk menggunakan fitur ini!');
    const guildId = message.guild.id;
    const query = message.content.toLowerCase().slice(10);
    console.log(query);
    const keyResponse = query.split("|");

    if (keyResponse.length !== 2) {
        return message.reply('Format salah! Gunakan ( | ) untuk memisahkan!');
    }

    const args1 = keyResponse[0];
    const args2 = keyResponse[1];

    if (!query.includes('|')) return message.reply('Format salah! Gunakan ( | ) untuk memisahkan!');
    if (isAlreadyInResponseList(guildId, args1)) return message.reply(`List Autorespon dengan key : \n\`\`\`\n${args1}\n\`\`\`Sudah ada di Server **${message.guild}** ini.`);
    addResponseToList(guildId, args1, args2);
    message.reply(`Berhasil menambahkan List Autorespond : \n\`\`\`\n${args1}\n\`\`\``);
};

exports.conf = {
    aliases: ['messadd']
};

exports.help = {
    name: "addmess"
};
