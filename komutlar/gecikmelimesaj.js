const ms = require('ms')
const discord = require('discord.js')
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu komutu kullanabilmek için yönetici yetkisine sahip olmalısın!')

    let kanal = message.mentions.channels.first()
    if(!kanal) return message.channel.send('Lütfen kanalı belirtin!')
    if(!args[1]) return message.channel.send('Lütfen süreyi belirtin!')
let engin = args[1]
.replace(`saniye`, `s`)
.replace(`dakika`, `m`)
.replace(`saat`, `h`)
.replace(`gün`, `d`);
let mesaj = args.slice(2).join(' ')
if(!mesaj) return message.channel.send('Lütfen mesajı belirtin!')
setTimeout(function() {
  client.channels.cache.get(kanal.id).send(mesaj)
 }, ms(engin));
return message.channel.send('ayarlandı')

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'gecikmeli-mesaj',
    description: "abcssdsaasd"
  
  };