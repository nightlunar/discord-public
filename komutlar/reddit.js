const Discord = require('discord.js')
const request = require('node-superfetch')

exports.run = async (client, message, args) => {
try {
    let user = args[0]
    if (!user) return message.channel.send(new Discord.MessageEmbed() .setTitle('404....') .setColor('BLUE'))
    const { body } = await request.get(`https://www.reddit.com/user/${user}/about.json`)
    const { data } = body;
    if (data.hide_from_robots) return message.channel.send('This user is secret');

    const embed1 = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setThumbnail(data.icon_img.replace(/(amp;)/gi, ""))
    .setURL(`https://www.reddit.com/user/${user}`)
    .setTitle(`/u/${data.name}`)
    .addField("Username", data.name, true)
    .addField("id", data.id, true)
    .addField("karma", Number(data.total_karma), true)
    .addField("Creation Date", require('moment').utc(data.created_utc * 1000).format("MM/DD/YYYY"), true)
    .addField("Premium?", data.is_gold ? "Yes." : "No.", true)
    return message.channel.send(embed1)
} 


  catch (error) {
     if (error.status === 404) return message.channel.send('error: 404 not found')
 }

}

 //çevirmen lazım..
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['reddit'],
    permLevel: 0,
};
 
exports.help = {
    name: 'reddit',
    description: 'not',
    usage: 'not'
};