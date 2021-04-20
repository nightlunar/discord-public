const Discord = require('discord.js');
const db = require("quick.db");
const ayarlar = require('../../ayarlar.json');

exports.run = async(client, message, args) => {













    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    if (kontrol == "tr") {
        let preffix = db.fetch(`prefix_${message.guild.id}`)
        const prefixim = new Discord.MessageEmbed()
        .setDescription(`Bu sunucudaki prefixim: **${preffix ? preffix : ayarlar.prefix}** \n Prefixi Değiştirmek veya Sıfırlamak İçin **( ayarla / sıfırla )**`)
        .setColor('BLUE');
    
        if(!args[0]) return message.reply(prefixim)
     


  
        
        
        const ayarlanmayan = new Discord.MessageEmbed()
        .setDescription(`Ayarlanmayan şeyi sıfırlayamazsın.`)
        .setColor('BLUE');
        
        const basarili = new Discord.MessageEmbed()
        .setDescription(`Prefix başarıyla sıfırlandı. Prefix artık **${ayarlar.prefix}**`)
        .setColor('BLUE');
        
        
        




     
     
         if(args[0] == "sıfırla" || args[0] =="reset") {
         if(!preffix) {
           return message.reply(ayarlanmayan)
         } else {
         db.delete(`prefix_${message.guild.id}`)
         return  message.reply(basarili)
         }
       }
       
       
       if(args[0] === "ayarla" || args[0] == "set") {
           if(!args[1]) return message.reply("Bir hata yakaladım")
     
         if(preffix) {
             return message.reply(`önce prefixi sıfırlayıp sonra değiştir..`)
           } else {
           db.set(`prefix_${message.guild.id}`, args[1])

            const trset = new Discord.MessageEmbed()
            .setDescription(`Prefix başarıyla **${args[1]}** olarak ayarlandı.\n${args[1]}prefix sıfırla yazarak prefixi sıfırlayabilirsiniz.`)
            .setColor('BLUE');
        

           message.reply(trset)
           }
       }

    }else{
        let preffix = db.fetch(`prefix_${message.guild.id}`)

        const myprefix = new Discord.MessageEmbed()
        .setDescription(`My prefix in this server is: **${preffix ? preffix : ayarlar.prefix}** \n   To reset or to assign a new prefix use **( set / reset )**`)
        .setColor('BLUE');
        if(!args[0]) return message.reply(myprefix)
     
     const cannot = new Discord.MessageEmbed()
     .setDescription('You can not reset this setting')
     .setColor('BLUE');
     
         if(args[0] == "sıfırla" || args[0] =="reset") {
         if(!preffix) {
           return message.reply(cannot)
         } else {
         db.delete(`prefix_${message.guild.id}`)
         const reset12 = new Discord.MessageEmbed()
         .setDescription(`The prefix was sucsessfuly resetted, the prefix is now: **${ayarlar.prefix}**`)
         .setColor('BLUE')
         return  message.reply(reset12)
         }
       }
       
       
       if(args[0] === "ayarla" || args[0] == "set") {
           if(!args[1]) return message.reply("Please assign a value")
     
         if(preffix) {
             return message.reply(`error unknown.`)
           } else {
           db.set(`prefix_${message.guild.id}`, args[1])

           const seten = new Discord.MessageEmbed()
           .setDescription(`Prefix has been set to **${args[1]}** sucsessfuly.\nuse ${args[1]}prefix reset in order to reset your prefix`)
           .setColor('BLUE')
           message.reply(seten)
           }
       }
    }

    

 }                 

exports.conf = {
  enabled: true,
  aliases: ['prefix', 'ön-ek'],
  permLevel: 3
};

exports.help = {
  name: 'prefix',
  kategori: "yetkili",
  description: 'Sunucuya özel prefix ayarlar.',
  usage: 'prefix'
};