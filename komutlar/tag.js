const discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json")
exports.run = async(client , message, args) => {
let pavyonik = db.fetch(`tag_${message.guild.id}`)
if(pavyonik == pavyonik) {var pythonic = pavyonik}
if(pavyonik == undefined) {var pythonic = "ayarlanmamış"}
const embed = new discord.MessageEmbed()
.setDescription(`:book:  **Tagımız: __${pythonic}__**  :book:`)
.setTimestamp()
.setFooter(message.guild.name)
if(!args[0]) return message.channel.send(embed)
if(args[0] == "ayarla") {
let engin = db.fetch(`tag_${message.guild.id}`)
if(engin) {
    let engin = db.fetch(`tag_${message.guild.id}`)
    const embedd = new discord.MessageEmbed()
.setTitle('PYTHONİC VİDEO BOT HATA')
.setDescription(`Tag zaten ayarlı! \n \n Ayarlı tag: ${engin}`)
return message.channel.send(embedd)
} 
if(!engin) {
let tag = args.slice(1).join(' ')
if(!tag) return message.channel.send('Lütfen tagı belirtiniz!')
db.set(`tag_${message.guild.id}`, tag)
const embedd = new discord.MessageEmbed()
.setTitle('Tag ayarlandı')
.setDescription(`${message.guild.name} adlı sunucunun tagı ${tag} olarak ayarlandı!`)
return message.channel.send(embedd)
}
}
if(args[0] == "log") {
    let engin = message.mentions.channels.first()
    if(!engin) return message.channel.send('Lütfen log kanalını belirtiniz!')
    db.set(`taglog_${message.guild.id}`, engin.id)
    return message.channel.send('Tag log kanalı ayarlandı!')
}
if(args[0] == "sıfırla")  {
    let engin = db.fetch(`tag_${message.guild.id}`)
    if(!engin) return message.channel.send('Tag zaten ayarlı değil!')
db.remove(`tag_${message.guild.id}`)
return message.channel.send(`Tagınız başarı ile sıfırlandı.`)
}
if(args[0] == "rol") {
    const embeddd = new discord.MessageEmbed()
    .setTitle('PYTHONİC VİDEO BOT HATA')
    .setDescription('Lütfen bir seçenek belirtin! \n \n `ayarla` `sıfırla`')
        if(!args[1]) return message.channel.send(embeddd)
        if(args[1] == "ayarla") {
    let kontrol = db.fetch(`tag_${message.guild.id}`)
    if(!kontrol) return message.channel.send('Lütfen ilk önce tagınızı ayarlayınız!')
let engin = message.mentions.roles.first()
const embedd = new discord.MessageEmbed()
.setTitle('PYTHONİC VİDEO BOT HATA')
.setDescription(`Lütfen tag rolü belirtiniz!`)
if(!engin) return message.channel.send(embedd)
db.set(`tagrol_${message.guild.id}`, engin.id)
const saane = new discord.MessageEmbed()
.setTitle('Tag rol ayarlandı')
.setDescription(`Tag rol başarı ile <@&${engin.id}> olarak ayarlandı!`)
return message.channel.send(saane)
        };
        if(args[1] == "sıfırla") {
        let kontrol = db.fetch(`tag_${message.guild.id}`)
        if(!kontrol) return message.channel.send('Tag rol ayarlı değil!')
        db.remove(`tagrol_${message.guild.id}`)
        const embedd = new discord.MessageEmbed()
        .setTitle('Başarı ile sıfırlandı')
        .setDescription(`Tag rolünüz başarı ile sıfırlandı`)
        return message.channel.send(embedd)
        }
}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'tag'
  };