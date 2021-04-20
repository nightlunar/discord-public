const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {
  msg = message

  let kontrol = await db.fetch(`dil_${msg.guild.id}`);
  if (kontrol == "tr") {
  let p = args[0];
  let prefix = await require('quick.db').fetch(`prefix_${msg.guild.id}`) || `n!`
  let onlycode = args.slice(0).join(' ');


  const yardım = new Discord.MessageEmbed()
.setTitle('<:net22:805337158063489034> Nether Yardım Menüsü')
.setColor('BLUE')
.setDescription(`
**Nether Yardım Sayfaları**
evet, birden fazla yardım sayfamız var 😅!
<:blobwizard:793361935419572235> ${prefix}eğelence <a:686198181876203532:793773711495921664> ${prefix}emoji
<:net17:805337311126618112> ${prefix}moderasyon <:net3:805337835266637836> ${prefix}sistemler
<:net15:805337362577096714> ${prefix}antiraid <:net24:805337113818169356> ${prefix}dil <en/tr>

**Nether Sunucu Ayarları**
<:nether_settings:805378320124477441> Şu Anki Prefix: ${prefix}
<:net8:805337635073163305> Şu Anki Sürüm: Beta 0.3
<:net24:805337113818169356> Sunucudaki dil: Türkçe


`)

message.channel.send(yardım)
}
 else {
  let p = args[0];
  let prefix = await require('quick.db').fetch(`prefix_${msg.guild.id}`) || `n!`
  let onlycode = args.slice(0).join(' ');


  const yardım = new Discord.MessageEmbed()
.setTitle('<:net22:805337158063489034> Nether Help Menu')
.setColor('BLUE')
.setDescription(`
**Nether Help Pages**
well, yes. We have a bunch of pages for help!
<:blobwizard:793361935419572235> ${prefix}fun <a:686198181876203532:793773711495921664> ${prefix}emojis
<:net17:805337311126618112> ${prefix}moderation <:net3:805337835266637836> ${prefix}systems
<:net15:805337362577096714> ${prefix}antiraid <:net24:805337113818169356> ${prefix}lang <en/tr>

**Current Nether Server Settings**
<:nether_settings:805378320124477441> Current Prefix: ${prefix}
<:net8:805337635073163305> Current Version: Beta 0.3
<:net24:805337113818169356> Current Language: English


`)

message.channel.send(yardım)

}}
exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ['help', 'yardım'],
 permLevel: 0,
};

exports.help = {
 name: 'yardhlpım',
 description: '',
 usage: ''
};