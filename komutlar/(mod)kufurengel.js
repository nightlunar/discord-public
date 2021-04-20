const Discord = require('discord.js')
const db = require('quick.db')









exports.run = async (client ,message, args) =>{

    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    if (kontrol == "tr") {
if(args[0] === 'aç') {
    db.set(`kufur_${message.guild.id}`, "acik")
    message.channel.send(new Discord.MessageEmbed() .setDescription('Başarılı Şekilde `Aktif` Edildi.') .setColor('BLUE'))
  return
}
if (args[0] === 'kapat') {
  db.delete(`kufur_${message.guild.id}`)
  message.channel.send(new Discord.MessageEmbed() .setDescription('Başarılı Şekilde `Deaktif` Edildi.') .setColor('BLUE'))
  return
}
message.channel.send(new Discord.MessageEmbed() .setDescription('Lütfen `aç` ya da `kapat` yaz :\)') .setColor('BLUE'))
} else {

    if(args[0] === 'on') {
        db.set(`kufur_${message.guild.id}`, "acik")
        message.channel.send(new Discord.MessageEmbed() .setDescription('You have sucsessfully activated a no curse filter!') .setColor('BLUE'))
      return
    }
    if (args[0] === 'off') {
      db.delete(`kufur_${message.guild.id}`)
      message.channel.send(new Discord.MessageEmbed() .setDescription('You have sucsessfully deactivated a no curse filter!.') .setColor('BLUE'))
      return
    }
    message.channel.send(new Discord.MessageEmbed() .setDescription('Please type in `on` or `off` in order to toggle the no curse filter! :\)') .setColor('BLUE'))
}};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür', 'antiswear', 'anticurse', 'nocurse', 'küfür-engel', 'küfür engel', 'no curse', 'no-curse'],
 permLevel: 0
};

exports.help = {
 name: 'küfür-ayarla',
 description: 'Davet Log Kanalını Belirler',
 usage: 'davet-kanal-ayarla #kanal'
};