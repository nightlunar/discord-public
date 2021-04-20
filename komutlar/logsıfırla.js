const discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json")
exports.run = async(client , message, args) => {
	if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu komutu kullanabilmek için yönetici yetkisine sahip olmalısın!')
    db.remove(`davetlog_${message.guild.id}`)
db.remove(`boostlog_${message.guild.id}`)
db.remove(`kanallog_${message.guild.id}`)
db.remove(`sunuculog_${message.guild.id}`)
db.remove(`rollog_${message.guild.id}`)
db.remove(`isimlog_${message.guild.id}`)
db.remove(`seslog_${message.guild.id}`)
db.remove(`sahiplog_${message.guild.id}`)
db.remove(`mesajlog_${message.guild.id}`)
db.remove(`banlog_${message.guild.id}`)
db.remove(`kicklog_${message.guild.id}`)
return message.channel.send(`Tüm loglar sıfırlandı!`)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'log-sıfırla'
  };