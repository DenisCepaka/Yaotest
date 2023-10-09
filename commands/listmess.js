const {EmbedBuilder} = require("discord.js");
const fs = require ('fs')

const autoresponsePath = './database/messresponse.json';
const db_respon_list = JSON.parse(fs.readFileSync('./database/messresponse.json'));
function isAlreadyInResponseListGroup(guildId, autoresponse) {
  return autoresponse.some(item => item.id === guildId);
}
exports.run = async (client, message, args) => {
  const guildId = message.guildId
  const guild = message.guild
    // let teksooo = '┌──⭓「 *LIST Expression* 」\n│\n'
    // for (let x of _registered) {
    // teksooo += `│⭔ ${x.messname} ID:${x.serial}\n`
    // }
    // teksooo += `│\n└────────────⭓\n\n*Total ada : ${_registered.length}*`
    // message.reply(teksooo)
      if (!isAlreadyInResponseListGroup(guildId, db_respon_list)) return reply(`Belum ada list message yang terdaftar di group ini`)
      const arr_rows = [];
      for (let x of db_respon_list) {
        if (x.id === guildId) {
          arr_rows.push({
            name: x.key,
            desc: x.message
          });
        }
      }
      
      // Build a string representation of the array
      let result = `List Autoresponse From **${guild}**\n`;
      for (let row of arr_rows) {
        result += `${row.name}: ${row.desc}\n`;
      }
      message.channel.send(result);
      // const arr_rows = [];
      // for (let x of db_respon_list) {
      // if (x.id === guildId) {
      // arr_rows.push({
      // name: x.key,
      // desc: x.message
      // });
      // message.channel.send(`List Autoresponse From **${guild}**\n${arr_rows}`);
      // }
      // }
      // const embed = new EmbedBuilder()
      //         .setTitle(`List Autoresponse From **${guild}**`)
      //         .setDescription(
      //           ``
      //       );

      //var listMsg = `*List Autoresponse From **${guild}**\n${arr_rows}`
    







}
exports.conf = {
    aliases: []
  };
  
  exports.help = {
    name: "listmess"
  };