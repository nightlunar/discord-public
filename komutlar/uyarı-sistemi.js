const discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json")
exports.run = async(client , message, args) => {
  if(message.author.id !== message.guild.owner.id) return message.channel.send('Bu komut sunucu sahibine özel!')
if(args[0] == "cezalı-rol") {
let engin = message.mentions.roles.first()
if(!engin) return message.channel.send('Lütfen cezalı rolü belirtin!')
db.set(`uyarıcezalırol_${message.guild.id}`, engin.id)
const embed = new discord.MessageEmbed()
.setTitle('Cezalı rol ayarlandı!')
.setDescription(`Cezalı rol başarı ile <@&${engin.id}> olarak ayarlandı!`)
.setTimestamp()
.setFooter(message.author.username)
return message.channel.send(embed)
}
if(args[0] == "yetkili-rol") {
  let engin = message.mentions.roles.first()
  if(!engin) return message.channel.send('Lütfen yetkili rolü belirtin!')
  db.set(`uyarıyetkilirol_${message.guild.id}`, engin.id)
  const embed = new discord.MessageEmbed()
  .setTitle('Yetkili rol ayarlandı!')
  .setDescription(`Yetkili rol başarı ile <@&${engin.id}> olarak ayarlandı!`)
  .setTimestamp()
  .setFooter(message.author.username)
  return message.channel.send(embed)
  }
  if(args[0] == "log") {
    let engin = message.mentions.channels.first()
    if(!engin) return message.channel.send('Lütfen uyarı log kanalını belirtin!')
    db.set(`uyarılog_${message.guild.id}`, engin.id)
    const embed = new discord.MessageEmbed()
    .setTitle('Uyarı log ayarlandı!')
    .setDescription(`Uyarı log kanalı başarı ile <#${engin.id}> olarak ayarlandı!`)
    .setTimestamp()
    .setFooter(message.author.username)
    return message.channel.send(embed)
    }
    if(args[0] == "sınır") {
    let engin = args[1]
    if(!engin) return message.channel.send('Lütfen uyarı sınırını sayı cinsinden belirtiniz!')
    db.set(`uyarısınır_${message.guild.id}`, Number(engin))
    const embed = new discord.MessageEmbed()
    .setTitle('Uyarı sınırı ayarlandı!')
    .setDescription(`Uyarı sınırı **${engin}** olarak ayarlandı!`)
    .setTimestamp()
    .setFooter(message.author.username)
    return message.channel.send(embed)
    }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'uyarı-ayarla'
  };