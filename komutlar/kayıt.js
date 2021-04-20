const Discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json")
exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.id) return message.channel.send('Bu komut sunucu sahibine özel!')
if(args[0] == "kanal") {
let kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send('Lütfen kayıt kanalını belirtiniz!')
db.set(`kayıtkanal_${message.guild.id}`, kanal.id)
const embed = new Discord.MessageEmbed()
.setTitle('Kayıt kanalı ayarlandı')
.setDescription(`Kayıt kanalını <#${kanal.id}> olarak ayarladım!`)
return message.channel.send(embed)
}
if(args[0] == "yetkili") {
let rol = message.mentions.roles.first()
if(!rol) return message.channel.send('Lütfen kayıt yetkili rolünü belirtin!')
db.set(`kayıtyetkili_${message.guild.id}`, rol.id)
const embed = new Discord.MessageEmbed()
.setTitle('Kayıt yetkili rolü ayarlandı')
.setDescription(`Kayıt yetkili rolü başarı ile <@&${rol.id}> olarak ayarlandı!`)
return message.channel.send(embed)
}
if(args[0] == "erkek") {
    let rol = message.mentions.roles.first()
    if(!rol) return message.channel.send('Lütfen erkek rolünü belirtin!')
    db.set(`kayıterkek_${message.guild.id}`, rol.id)
    const embed = new Discord.MessageEmbed()
    .setTitle('Erkek rolü ayarlandı')
    .setDescription(`Erkek rolü başarı ile <@&${rol.id}> olarak ayarlandı!`)
    return message.channel.send(embed)
}
if(args[0] == "kız") {
    let rol = message.mentions.roles.first()
    if(!rol) return message.channel.send('Lütfen kız rolünü belirtin!')
    db.set(`kayıtkız_${message.guild.id}`, rol.id)
    const embed = new Discord.MessageEmbed()
    .setTitle('Kız rolü ayarlandı')
    .setDescription(`Kız rolü başarı ile <@&${rol.id}> olarak ayarlandı!`)
    return message.channel.send(embed)
}
if(args[0] == "ses-kanal") {
    let engin = args[1]
if(!engin) return message.channel.send('Lütfen kayıt ses teyit kanalının idini belirtin! \n \n Birden fazla eklemek için bir kanalı ekleyip sonra aynı komutu kullanarak eklemeniz gerekir! \n \n Örnek: !kayıt ses kanal 793099311499706374 \n 2. sinde ise !kayıt ses kanal <diğer kanalın idi> şeklinde yazmanız gerekir')
db.set(`sesteyitkanal_${message.guild.id}.${engin}`, engin)
const embed = new Discord.MessageEmbed()
.setTitle('Ses kanalı ayarlandı!')
.setDescription(`Bundan sonra <#${engin}> adlı ses kanalına girilince sesli hoşgeldin mesajı ileteceğim`)
return message.channel.send(embed)
}
if(args[0] =="log") {
  let kanal = message.mentions.channels.first()
  if(!kanal) return message.channel.send('Lütfen kayıt log kanalını belirtiniz!')
  db.set(`kayıtlog_${message.guild.id}`, kanal.id)
  const embed = new Discord.MessageEmbed()
  .setTitle('Kayıt log kanalı ayarlandı')
  .setDescription(`Kayıt log kanalını <#${kanal.id}> olarak ayarladım!`)
  return message.channel.send(embed)
}
if(args[0] == "alınacak-rol") {
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send('Lütfen kayıt alınacak rolünü belirtin!')
  db.set(`kayıtalınacak_${message.guild.id}`, rol.id)
  const embed = new Discord.MessageEmbed()
  .setTitle('Kayıt alınanacak rolü ayarlandı')
  .setDescription(`Kayıt alınanacak rolü başarı ile <@&${rol.id}> olarak ayarlandı!`)
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
  name: 'kayıt-ayarla'
};