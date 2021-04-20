const discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json")
exports.run = async(client , message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu komutu kullanabilmek için yönetici yetkisine sahip olmalısın!')
    let engin = message.mentions.channels.first()
    if(!engin) return message.channel.send('Lütfen log kanalını belirtin!')
db.set(`davetlog_${message.guild.id}`, engin.id)
db.set(`boostlog_${message.guild.id}`, engin.id)
db.set(`kanallog_${message.guild.id}`, engin.id)
db.set(`sunuculog_${message.guild.id}`, engin.id)
db.set(`rollog_${message.guild.id}`, engin.id)
db.set(`isimlog_${message.guild.id}`, engin.id)
db.set(`seslog_${message.guild.id}`, engin.id)
db.set(`sahiplog_${message.guild.id}`, engin.id)
db.set(`mesajlog_${message.guild.id}`, engin.id)
db.set(`banlog_${message.guild.id}`, engin.id)
db.set(`kicklog_${message.guild.id}`, engin.id)
return message.channel.send(`Tüm loglar <#${engin.id}> kanalına kuruldu!`)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'log-kur'
  };