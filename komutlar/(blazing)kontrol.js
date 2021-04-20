const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const Blazing = new Discord.MessageEmbed()
  .setAuthor(`Nether Blazing`, client.user.avatarURL())
  .setColor("0x36393F")
  .setThumbnail(client.user.avatarURL())
  .setDescription(`• Subscription: ${db.has(`üyelikk_${message.author.id}`, "üyelik") ? `**Blazing!**` : `**Normal!**`}`)
.setFooter("Nether", message.author.avatarURL())
.setTimestamp()
  message.channel.send(Blazing)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["blazing", "check-blazing", "blazing-kontrol", "blazing-check"],
    permLevel: 0
}

exports.help = {
    name: "blazing",
    description: "bşad",
    usage: "yrdm felan"
}