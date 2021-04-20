const discord = require('discord.js')
const Database = require("plasma-db");
const db = new Database("./database.json"); 
exports.run = async(client , message, args) => {
    if(args[0] == "yetkili-rol"){
        let engin = message.mentions.roles.first()
        if(!engin) return message.channel.send('Lütfen jail yetkili rolünü belirtin!')
        db.set(`jailyetkili_${message.guild.id}`, engin.id)
        const embed = new discord.MessageEmbed()
        .setTitle('Jail yetkili rolü başarı ile ayarlandı!')
        .setDescription(`Jail yetkili rolü başarı ile <@&${engin.id}> olarak ayarlandı!`)
        return message.channel.send(embed)
    }
    if(args[0] == "rol") {
        let engin = message.mentions.roles.first()
        if(!engin) return message.channel.send('Jail rolünü belirtin!')
        db.set(`jailrol_${message.guild.id}`, engin.id)
        const embed = new discord.MessageEmbed()
        .setTitle('Jail rolü başarı ile ayarlandı!')
        .setDescription(`Jail rolü başarı ile <@&${engin.id}> olarak ayarlandı!`)
        return message.channel.send(embed)
    }
    if(args[0] == "log") {
        let engin = message.mentions.channels.first()
        if(!engin) return message.channel.send('Lütfen jail log kanalını belirtin!')
        db.set(`jaillog_${message.guild.id}`, engin.id)
        const embed = new discord.MessageEmbed()
        .setTitle('Jail log kanalı başarı ile ayarlandı!')
        .setDescription(`Jail log kanalı başarı ile <#${engin.id}> olarak ayarlandı!`)
        return message.channel.send(embed)
    }
}
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    permLevel: 0, 
    aliases: []
    };
    exports.help = {
    name: "jail-ayarla"
    };