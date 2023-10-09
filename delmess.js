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
















  };
exports.conf = {
	aliases: ['messadd']
  };
  
  exports.help = {
	name: "addmess"
  };