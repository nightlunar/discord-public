const Discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json")
exports.run = async (client, message, args) => {
    let kontrol = db.fetch(`kayıtyetkili_${message.guild.id}`)
    if(!kontrol) return message.channel.send('Lütfen ilk sistemi ayarlayın!')
    if(!message.member.roles.cache.has(db.fetch(`kayıtyetkili_${message.guild.id}`))) {
      return message.channel.send("Bu Komutu sadece kayıt yetkilisi kullanabilir!");
    }
    let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
    if(!kanal) return message.channel.send('Kayıt kanalı ayarlanmamış!')
    if(message.channel.id !== kanal) return message.channel.send(`Bu kanal kayıt kanalı değil! Bu komutu <#${kanal}> kanalında kullanabilirsin!`)
    let engin = message.mentions.members.first()
    if(!engin) return message.channel.send('Lütfen kayıt edilecek kişiyi etiketleyin!')
   if(args[1] == "erkek") {
       let isim = args[2]
       if(!isim) return message.channel.send('Lütfen kayıt edilecek kişinin ismini belirtin!')
       let yaş = args[3]
       if(!yaş) return message.channel.send('Lütfen kayıt edilecek kişinin yaşını belirtin!')
       let verilecek = db.fetch(`kayıterkek_${message.guild.id}`)
       if(!verilecek) return message.channel.send('Kayıt verilecek rol ayarlanmamış!')
       let alınacak = db.fetch(`kayıtalınacak_${message.guild.id}`)
       if(!alınacak) return message.channel.send('Kayıt alınacak rol ayarlanmamış!')
       //
       let tagvar = db.fetch(`tag_${message.guild.id}`)
       if(tagvar == tagvar) {var tag = tagvar}
       if(tagvar == undefined) {var tag = ""}
    db.add(`kayıtsayıerkek_${message.guild.id}.${message.author.id}`, 1)
    message.guild.members.cache.get(engin.id).roles.add(verilecek)
    message.guild.members.cache.get(engin.id).roles.remove(alınacak)
    message.guild.members.cache.get(engin.id).setNickname(`${tag} ${isim} | ${yaş}`)
    let log = db.fetch(`kayıtlog_${message.guild.id}`)
    const embed = new Discord.MessageEmbed()
    .setTitle('Kayıt işlemi')
    .setDescription(`**__YETKİLİ__** \n \n Kişi: <@${message.author.id}> \n \n İdi: ${message.author.id} \n \n **__Kayıt edilen__** \n \n Kişi: <@${engin.id}> \n \n İdi: ${engin.id} \n \n İsmi: ${isim} \n \n Yaşı: ${yaş} \n \n Cinsiyeti: erkek \n \n **Kayıt tamamlandı mı** :  :white_check_mark: `)
    client.channels.cache.get(log).send(embed)
    return message.channel.send('Kişinin kaydı tamamlandı!')
   }
   //
   if(args[1] == "kız") {
    let isim = args[2]
    if(!isim) return message.channel.send('Lütfen kayıt edilecek kişinin ismini belirtin!')
    let yaş = args[3]
    if(!yaş) return message.channel.send('Lütfen kayıt edilecek kişinin yaşını belirtin!')
    let verilecek = db.fetch(`kayıtkız_${message.guild.id}`)
    if(!verilecek) return message.channel.send('Kayıt verilecek rol ayarlanmamış!')
    let alınacak = db.fetch(`kayıtalınacak_${message.guild.id}`)
    if(!alınacak) return message.channel.send('Kayıt alınacak rol ayarlanmamış!')
    db.add(`kayıtsayıkız_${message.guild.id}.${message.author.id}`, 1)
 message.guild.members.cache.get(engin.id).roles.add(verilecek)
 message.guild.members.cache.get(engin.id).roles.remove(alınacak)
 message.guild.members.cache.get(engin.id).setNickname(`${isim} | ${yaş}`)
 let log = db.fetch(`kayıtlog_${message.guild.id}`)
 const embed = new Discord.MessageEmbed()
 .setTitle('Kayıt işlemi')
 .setDescription(`**__YETKİLİ__** \n \n Kişi: <@${message.author.id}> \n \n İdi: ${message.author.id} \n \n **__Kayıt edilen__** \n \n Kişi: <@${engin.id}> \n \n İdi: ${engin.id} \n \n İsmi: ${isim} \n \n Yaşı: ${yaş} \n \n Cinsiyeti: kız \n \n **Kayıt tamamlandı mı** :  :white_check_mark: `)
 client.channels.cache.get(log).send(embed)
 return message.channel.send('Kişinin kaydı tamamlandı!')
}
   //

  }
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'kayıt'
  };