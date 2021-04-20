const discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./database.json"); 
exports.run = async(client, message, args) => {

if(args[0] == "log") {
let enginarr = message.mentions.channels.first()
if(!enginarr) return message.channel.send('Lütfen mute log kanalını belirtin!')
db.set(`mutelog_${message.guild.id}`, enginarr.id)
return message.channel.send(`Mute log kanalı <#${enginarr.id}> olarak ayarlandı!`)
}
if(args[0] == "yetkili-rol") {
let engin = message.mentions.roles.first()
if(!engin) return message.channel.send('Lütfen mute yetkili rolünü belirt!')
db.set(`muteyetkili_${message.guild.id}`, engin.id)
return message.channel.send(`Mute yetkili rolü başarı ile <@&${engin.id}> olarak ayarlandı!`)
}
if(args[0] == "rol") {
let engin = message.mentions.roles.first()
if(!engin) return message.channel.send('Lütfen mute rolünü belirtin!')
db.set(`muterol_${message.guild.id}`, engin.id)
return message.channel.send(`Mute rolü başarı ile <@&{engin.id}> olarak ayarlandı!`)
}
}
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    permLevel: 0, 
    aliases: []
    };
    exports.help = {
    name: "mute-ayarla"
    };