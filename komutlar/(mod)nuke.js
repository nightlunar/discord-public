const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async (client, message, args) => {
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    if (kontrol == "tr") {
        const onayembed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTimestamp()
        .setAuthor("Nuke Komutu")
        .setFooter("Onaylamak için 👍 emojisine, Red etmek içinse 👎 emojisine tıklayabilirsiniz")
        .setDescription("**UYARI!** \n\nEğer nuke işlemini onaylarsanız bu kanal kalıcı olarak **silinecek**,\n**geri getirilemeyecektir!**\nAncak bu kanalın **kopyası oluşturulacaktır!** \n")
        message.channel.send(onayembed).then(msg => {
      msg.react('👍').then(() => msg.react('👎'));
      
      const filter = (reaction, user) => {
          return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
      };
      
      msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
          .then(collected => {
              const reaction = collected.first();
      
              if (reaction.emoji.name === '👍') {
            message.channel.clone({position: message.channel.position});
            message.channel.delete();
              } else {
                const xdembed2 = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setTitle('Kanala bomba atıldı!')
                .setImage('https://tenor.com/view/destory-eexplode-nuke-gif-6073338')
                  message.reply(xdembed2);
            msg.delete({timeout:3000})
              }
          })
          .catch(collected => {
              message.reply('Bir hatayla karşılaştık! Lütfen daha sonra tekrar deneyiniz.');
          });
        
      })

    }else{
        const onayembed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTimestamp()
        .setAuthor("Nuke Komutu")
        .setFooter("In order to connfirm click on the 👍 emoji, In order to decline tap the 👎 emoji!")
        .setDescription("**WARNING!** \n\nIf you accept the nuke this channel will be **deleted**,\n**You cannot get this channel\'s messages to return*\nOnly a clone of this channel will be created \n")
        message.channel.send(onayembed).then(msg => {
      msg.react('👍').then(() => msg.react('👎'));
      
      const filter = (reaction, user) => {
          return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
      };
      
      msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
          .then(collected => {
              const reaction = collected.first();
      
              if (reaction.emoji.name === '👍') {
            message.channel.clone({position: message.channel.position});
            message.channel.delete();
              } else {

                const xdembed = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setTitle('Nuking sucsessful!')
                .setImage('https://tenor.com/view/destory-eexplode-nuke-gif-6073338')
                message.reply(xdembed);
            msg.delete({timeout:3000})
              }
          })
          .catch(collected => {
              message.reply('We found an error..');
          });
        
      })
    }

};




exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3,
  kategori: "sunucu"
};

exports.help = { 
	name: 'nuke', 
  description: "Bot bulunduğunuz kanalı siler ve yeniden oluşturur.",
  usage: 'nuke'
}