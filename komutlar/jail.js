const discord = require('discord.js')
const Database = require("plasma-db");
const db = new Database("./database.json");
const ms = require("ms");
exports.run = async(client, message, args) => {
let yetkili = db.fetch(`jailyetkili_${message.guild.id}`)
if(!yetkili) return message.channel.send('Jail yetkilisi ayarlanmamış!')
let log = db.fetch(`jaillog_${message.guild.id}`)
if(!log) return message.channel.send('Jail log kanalı ayarlanmamış!')
let rol = db.fetch(`jailrol_${message.guild.id}`)
if(!rol) return message.channel.send('Jail rolü ayarlanmamış!')
let engin = message.mentions.users.first()
if(!engin) return message.channel.send('Lütfen jail atacağın kişiyi etiketle!')
if(!args[1]) return message.channel.send('Lütfen süreyi belirtin!')
let süre = args[1]
.replace(`saniye`, `s`)
.replace(`dakika`, `m`)
.replace(`saat`, `h`)
.replace(`gün`, `d`);
if(!süre) return message.channel.send('Lütfen jail süresini belirtin!')
let sebep = args.slice(2).join(' ')
if(!sebep) return message.channel.send('Lütfen jail sebebini belirtin!')

message.guild.members.cache.get(engin.id).roles.add(rol)
db.set(`jaillikişi_${message.guild.id}.${engin.id}`, engin.id)
setTimeout(function() {
   message.guild.members.cache.get(engin.id).roles.remove(rol);
    db.delete(`jaillikişi_${message.guild.id}.${engin.id}`, engin.id)
    const embedd = new discord.MessageEmbed()
    .setTitle('Birinin jail süresi bitti!')
    .setDescription(`<@${message.author.id}> adlı kişinin <@${engin.id}> adlı kişiye attığı jailin süresi bitti! \n Süre: ${süre}`)
    client.channels.cache.get(log).send(embedd)
  }, ms(süre));
const embed = new discord.MessageEmbed()
.setTitle('Bir jail gördüm!')
.setDescription(`<@${message.author.id}> adlı kişi <@${engin.id}> adlı kişiyi jaile attı! \n Süre: ${süre} \n Sebep: ${sebep}`)
client.channels.cache.get(log).send(embed)
message.author.send('Kişi başarı ile jaillendi!')
}
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    permLevel: 0, 
    aliases: []
    };
    exports.help = {
    name: "jail"
    };
