const db = require('quick.db')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (client, message, args) => {
  if(message.author.id !== "636573504598442084") if(message.author.id !== "725788906418733096") return message.channel.send("**Bu Komut Sahiplerime Özeldir.**");
  
  let user = client.users.cache.get(args.slice(0).join(' '));
  let nesne = args[0]
  if (!nesne) return message.channel.send('**Bir İD Belirtmelisin.**')
  
  db.delete(`üyelikk_${nesne}`, 'üyelik')
  
  message.channel.send(`**<@${nesne}> adlı kişinin gold üyeliğini başarıyla kaldırdım**.`)
client.channels.cache.get('799971121864507394').send( new Discord.MessageEmbed() .setDescription(`**<@${nesne}> ID'li Kullanıcı Gold Üyelikten çıkartıldı.**`) .setColor('BLUE'))
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['goldkaldır', 'gold-kaldır', 'goldal', 'gold-al', 'remove-gold', 'remove-vip', 'remove-blazing'],
  permLevel: 0
};
exports.help = {
  name: 'goldüyekaldır',
  description: 'Gold üye ekler',
  usage: 'goldkaldıryarrm'
};