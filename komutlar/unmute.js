const discord = require('discord.js')
const Database = require("plasma-db");
const db = new Database("./database.json"); 
exports.run = async(client, message,args) => {
    var kontrol = message.guild.roles.cache.get(db.fetch(`muteyetkili_${message.guild.id}`))
if(!kontrol) return message.channel.send('Mute yetkilisi değilsin :d')
    let muterol = db.fetch(`muterol_${message.guild.id}`)
let enginar = message.mentions.users.first()
if(!enginar) return message.channel.send('Lütfen unmute atılacak kişiyi etiketleyin')
    message.guild.members.cache.get(enginar.id).roles.remove(muterol);
return message.channel.send('Kişinin mute rolü kaldırıldı!')
};
exports.conf = {
enabled: true, 
guildOnly: false, 
permLevel: 0, 
aliases: []
};
exports.help = {
name: "unmute"
};