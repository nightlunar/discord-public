const db = require('quick.db')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (client, message, args) => {
  if(message.author.id !== "636573504598442084") if(message.author.id !== "725788906418733096") return message.channel.send("**Bu Komut Sahiplerime Özeldir.**");
  
  let user = client.users.cache.get(args.slice(0).join(' '));
  let nesne = args[0]
  if (!nesne) return message.channel.send('**Bir İD Belirtmelisiniz.**')
  
  db.set(`üyelikk_${nesne}`, 'üyelik')
  
  message.channel.send( new Discord.MessageEmbed() .setDescription(`**<@${nesne}> Adlı Kişinin Gold Üyelği Aktif Edildi.**`) .setColor('BLUE'))
client.channels.cache.get('799971121864507394').send(new Discord.MessageEmbed() .setDescription(`**<@${nesne}> ID\'li Kullanıcı Gold Üyeliğe Eklendi.**`) .setColor('BLUE'))

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['goldekle','goldver','S-K-Y-B-O-W', 'addgold', 'addblazing', 'add-blazing'],
  permLevel: 0
};
exports.help = {
  name: 'goldüyeekle',
  description: 'Gold üye ekler',
  usage: 'gold-üye-ekle'
};