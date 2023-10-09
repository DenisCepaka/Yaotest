const {EmbedBuilder} = require("discord.js");
var config = require("../config.js");
exports.run = async (client, message, args, command) => {

  if (args.length == 0) return message.reply(`Example: y.apakah (message)`);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);}
    const inputString = message.content.slice(2);
    const outputString = inputString.split(' ').map(capitalizeFirstLetter).join(' ');
    const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Coba Ulangi'];
    const kah = apa[Math.floor(Math.random() * apa.length)];
      const PAKAH = new EmbedBuilder()
    .setTitle(`⪻・ ⌜KLEE tapi KEONG AJAIB ??⌟`)
    .setColor(config.embedColor)
    .setDescription(`**⪻ Pertanyaan :**\n\`\`\`${outputString}\`\`\`\n**⪼ Jawaban :**\n**\`\`\`${kah}\`\`\`**`)
    .setFooter({ text: `✦ Command By ${message.author.username}`})
    // .setFooter({text: `✦ Command By ${message.author.username}`, iconURL: '' })
    return message.reply({
    embeds: [PAKAH]
    });
  











};
exports.conf = {
    aliases: [`keong`, `apakah`,]
  };
  
  exports.help = {
    name: "apakah"
  };