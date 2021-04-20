const discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json")
exports.run = async(client , message, args) => {
    if(!message.member.roles.cache.has(db.fetch(`uyarıyetkilirol_${message.guild.id}`))) {
        return message.channel.send("Bu Komutu uyarı yetkilisi kullanabilir!");
    }
    let uyarısınır = db.fetch(`uyarısınır_${message.guild.id}`)
if(!uyarısınır) return message.channel.send('Uyarı sınır ayarlanmamış!')
let user = message.mentions.users.first()
if(!user) return message.channel.send('Uyarı atılacak kişiyi belirtin!')
let uyarısayı = db.fetch(`uyarısayı_${message.guild.id}.${user.id}`)
if(uyarısayı == uyarısınır) {
let cezalırol = db.fetch(`uyarıcezalırol_${message.guild.id}`)
if(!cezalırol) return message.channel.send('Cezalı rol ayarlanmamış!')
message.guild.members.cache.get(user.id).roles.add(cezalırol)
db.remove(`uyarısayı_${message.guild.id}.${user.id}`)
db.remove(`uyarısebep_${message.guild.id}.${user.id}`)
return message.channel.send('Kişi uyarı sayısını aştı ve cezalı rol verildi! \n Uyarıları sıfırlandı!')
}
let sebep = args.slice(1).join(' ')
if(!sebep) return message.channel.send('Lütfen uyarı sebebini belirtin!')
let log = db.fetch(`uyarılog_${message.guild.id}`)
if(!log) return message.channel.send('Uyarı log ayarlanmamış!')
db.push(`uyarısebep_${message.guild.id}.${user.id}`, `Uyarı sebebi: ${sebep}`)
db.add(`uyarısayı_${message.guild.id}.${user.id}`, 1)
const embedd = new discord.MessageEmbed()
.setTitle('Bir uyarı gördüm!')
.setDescription(`<@${message.author.id}> adlı kişi <@${user.id}> adlı kişiye ${message.guild.name} adlı sunucuda ${sebep} yüzünden uyarı attı!`)
client.channels.cache.get(log).send(embedd)
const embed = new discord.MessageEmbed()
.setTitle('Uyarı atıldı!')
.setDescription(`Başarı ile <@${user.id}> adlı kişiye ${sebep} yüzünden uyarı attınız!`)
return message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'uyarı-ekle'
  };