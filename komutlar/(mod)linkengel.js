const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {


    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    if (kontrol == "tr") {



let embed1 = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription('Bu ayarı kullanmak için aç ya da kapat yazmalısın')

let embed2 = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription('Yetkin olmadığı için bu komutu kullanamazsın')

let embed3 = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription('Tebrikler! Reklam Engel açıldı, üyeleri_yasakla yetkisi olanlar etkilenmeyeceklerdir.')

let embed4 = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription('Reklam engel başarıyla kapatıldı')

  if (!args[0]) return message.channel.send(embed1)
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(embed2)
  
  if (args[0] == 'aç') {
    var i = await db.set(`reklam_${message.guild.id}`, 'acik')
   
      message.channel.send(embed3)
    }
  
  if (args[0] == 'kapat') {
    var i = await db.set (`reklam_${message.guild.id}`, 'kapali')
      message.channel.send(embed4)
    }
  
    } else {
        let embed1 = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setDescription('You need to say open or close in order to use this function')
        
        let embed2 = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setDescription('You cannot use this command because its command restricted')
        
        let embed3 = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setDescription('Congratulations! You have opened up an ad blocker')
        
        let embed4 = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setDescription('The ad blocker has been turned off...')
        
          if (!args[0]) return message.channel.send(embed1)
          if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(embed2)
          
          if (args[0] == 'open') {
            var i = await db.set(`reklam_${message.guild.id}`, 'acik')
           
              message.channel.send(embed3)
            }
          
          if (args[0] == 'close') {
            var i = await db.set (`reklam_${message.guild.id}`, 'kapali')
              message.channel.send(embed4)
            }

    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['advertisement','reklam', 'reklam-engel', 'link-engel', 'adblocker', 'ad-blocker'],
  permLevel: 0
};

exports.help = {
  name: 'reklamengel',
  description: '[Admin Komutu]',
  usage: 'reklamengel'
};