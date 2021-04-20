const Discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json")
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu komutu kullanabilmek için yönetici yetkisine sahip olmalısın!')

if(args[0] == "ayarla") {
let engin = message.mentions.channels.first()
if(!engin) return message.channel.send('Lütfen sohbet kanalını belirtiniz!')
db.set(`sohbetkanal_${message.guild.id}`, engin.id)
const embed = new Discord.MessageEmbed()
.setTitle('Başarı ile ayarladınız')
.setDescription(`Sohbet kanalı <#${engin.id}> olarak ayarlandı`)
return message.channel.send(embed)
}
if(args[0] == "sıfırla") {
db.remove(`sohbetkanal_${message.guild.id}`)
return message.channel.send('Sohbet kanalı sıfırlandı')
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sohbet-kanal',
  description: "abcssdsaasd"

};