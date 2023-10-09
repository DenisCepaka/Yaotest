const { EmbedBuilder } = require("discord.js");
var config = require("../config.js");
const autoresponsePath = './database/messresponse.json';
// const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('../lib/messagedb.js');
const client = require("..");
const prefix = config.prefix;
const fs = require ('fs')
function getDataFromResponseList(guildId, key, autoresponse) {
  const position = autoresponse.findIndex(item => item.id === guildId && item.key === key);
  
  if (position !== -1) {
      return autoresponse[position];
  }
  return null;
}
function isAlreadyInResponseList(guildId, key, autoresponse) {
  return autoresponse.some(item => item.id === guildId && item.key === key);
};
function sendResponseFromList(guildId, key, autoresponse) {
  const item = getDataFromResponseList(guildId, key, autoresponse);
  
  if (item) {
      return item.message;
  }
  return null;
}
client.on("messageCreate", async (message) => {
const guildId = message.guildId
const mess = JSON.parse(fs.readFileSync('./database/messresponse.json'))
const msg = message.content.toLocaleLowerCase()
//Autorespond
if (msg && isAlreadyInResponseList(guildId, msg, mess)) {
  if (message.author.bot) return;
  const autoress = (sendResponseFromList(guildId, msg, mess))
  .replaceAll(/\\n/g, "\n")
  // .replaceAll(/{server}/g, member.guild.name)
  // .replaceAll(/{count}/g, member.guild.memberCount)
  // .replaceAll(/{member:nick}/g, member.displayName)
   .replaceAll(/{member:name}/g, message.member.displayName)
  // .replaceAll(/{member:dis}/g, member.user.discriminator)
   .replaceAll(/{member:tag}/g, message.member)
  // .replaceAll(/{member:mention}/g, member.toString())
  // .replaceAll(/{member:avatar}/g, member.displayAvatarURL())
  // .replaceAll(/{inviter:name}/g, inviteData.name)
  // .replaceAll(/{inviter:tag}/g, inviteData.tag)
  message.channel.send(autoress)}

const channel = [`1085198278305521705`, `1022421111725633547`, `1020356145090658384`, `1059060358301622272`, `955283266485747772`]
for (const data of channel) {
if (message.channel.id.includes(data)) {
  // Periksa apakah pesan mengandung tautan YouTube
  if (message.content.includes('youtube.com') || message.content.includes('youtu.be')) {
    message.delete(); // Hapus pesan yang mengandung tautan YouTube
    message.channel.send(`Kak ${message.member}, Pesan dengan tautan YouTube tidak diizinkan di Channel ini!!.`);
  }}};
// `msg = https://www.youtube.com/watch?v=1AXrkW37rVM`

// const chatPublic = ("1020356145090658384");
// if(message.author.bot) return;
// if(chatPublic.includes(message.channel.id)) {
// const fetchedMessages = await message.channel.messages.fetch();
// const stickyMessage = fetchedMessages.find(m => m.author.id === client.user.id && chatPublic.includes(m.channel.id));
// }
// if(stickyMessage) {
// stickyMessage.delete().then(() => {
// const Public = new EmbedBuilder()
// .setColor(0xFF0000)
// // .setTitle('╭━━❈ Pengingat Ulang Tahun')
// .setDescription('Sepi kek hati :v')
// 	// 		.addFields(
// 	// 	{ name: 'Regular field title', value: 'Some value here' },
// 	// 	{ name: '\u200B', value: '\u200B' },
// 	// 	{ name: 'Inline field title', value: 'Some value here', inline: true },
// 	// 	{ name: 'Inline field title', value: 'Some value here', inline: true },
// 	// )
// 	// 		.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
// // .setImage('https://cdn.discordapp.com/attachments/954474348582944778/1059242026421473330/red-divider.gif')
// // .setThumbnail('https://cdn.discordapp.com/attachments/954474348582944778/1082734138794184734/E7RcepcWUC8FvsQ.jpg')
// // .setTimestamp()
// // .setFooter({ text: 'ISID Management', iconURL: 'https://cdn.discordapp.com/attachments/954474348582944778/1068476090458329139/20230127_172038.jpg' });

// message.channel.send({
// embeds: [Public]
// });

// }).catch(() => {});
// } else {
//             // Force send a new message.
// const Public1 = new EmbedBuilder()
// .setColor(0xFF0000)
// // .setTitle('')
// .setDescription('Sepi kek hati :v')
// 	// 		.addFields(
// 	// 	{ name: 'Regular field title', value: 'Some value here' },
// 	// 	{ name: '\u200B', value: '\u200B' },
// 	// 	{ name: 'Inline field title', value: 'Some value here', inline: true },
// 	// 	{ name: 'Inline field title', value: 'Some value here', inline: true },
// 	// )
// 	// 		.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
// // .setImage('https://cdn.discordapp.com/attachments/954474348582944778/1059242026421473330/red-divider.gif')
// // .setThumbnail('https://cdn.discordapp.com/attachments/954474348582944778/1082734138794184734/E7RcepcWUC8FvsQ.jpg')
// // .setTimestamp()
// // .setFooter({ text: 'ISID Management', iconURL: 'https://cdn.discordapp.com/attachments/954474348582944778/1068476090458329139/20230127_172038.jpg' });

// message.channel.send({
// embeds: [Public1]
// });
// }
// }

  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.toLocaleLowerCase().split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    cmd.run(client, message, params);
  }

});
