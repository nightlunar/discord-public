const discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json")
exports.run = async(client , message, args) => {
let engin = message.mentions.channels.first()
if(!engin) return message.channel.send('Lütfen oylamanın yapılacağı kanalı belirtiniz')
let enginar = args.slice(1).join(' ')
if(!enginar) return message.channel.send('Lütfen oylama yapılacak şeyi belirtin!')
const embed = new discord.MessageEmbed()
.setTitle('Yeni bir oylama!')
.setDescription(enginar)
engin.send(embed).then(function(message) {
message.react('✅')
message.react('❌')
})
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'oylama'
  };