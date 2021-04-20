const db = require('quick.db')
const Discord = require('discord.js')
 
 
exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send(`Aç yada kapat yazmalısın!! Örnek: **!sa-as aç**`)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send( new Discord.MessageEmbed() .setDescription(' Bu komutu kullanmak için \`MESAJLARI_YÖNET\` yetkisine sahip olmalısın!') .setColor('BLUE'))
 
  if (args[0] === 'aç') {
    
    db.set(`saas_${message.guild.id}`, 'acik')
    message.channel.send( new Discord.MessageEmbed() .setDescription(`Artık bot Sa diyince As diyecek. Kapatmak için "\`n!sa-as kapat\`" yazmalısın.`) .setColor('BLUE'))
 
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`saas_${message.guild.id}`, 'kapali')
    message.channel.send( new Discord.MessageEmbed() .setDescription(`Artık biri sa diyince cevap vermicek.`) .setColor('BLUE'))

  }
 
}
//codare
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sa-as-sistemi', 'sa-as', 'saas'],
  permLevel: 0,
  kategori: "Ayarlar"
};
 
exports.help = {
  name: 'sa-as',
  description: 'Sa As ayarlarsın.',
  usage: 'sa-as'
};