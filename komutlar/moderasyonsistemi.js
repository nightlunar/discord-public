const Discord = require('discord.js');
exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed()
.setTitle(':scroll: Moderasyon Yardım Menüsü  :scroll:')
.setDescription("`!mute-ayarla rol` = Mute rol ayarlarsınız. \n \n `!mute-ayarla log` = Mute log ayarlarsınız. \n \n `!mute-ayarla yetkili-rol` = Yetkili rol ayarlarsınız. \n \n `!mute @kişi <süre> <sebep>` \n \n `!jail-ayarla yetkili-rol` = Jail yetkili rol ayarlarsınız. \n \n `!jail-ayarla rol` = Jail rol ayarlarsınız. \n \n `!jail-ayarla log` = Jail log ayarlarsınız. \n \n `!jail @kişi <süre> <sebep>` = Jail atarsınız. \n \n `!uyarı-ayarla cezalı-rol` = Uyarı sistemi cezalı rol ayarlarsınız. \n \n `!uyarı-ayarla yetkili-rol` = Uyarı sistemi yetkili rol ayarlarsınız. \n \n `!uyarı-ayarla log` = Uyarı log ayarlarsınız. \n \n `!uyarı-ayarla sınır` = Uyarı sınır ayarlarsınız. \n \n `!uyarı-ekle @kişi sebep` = Uyarı eklersiniz. \n \n `!uyarı-bilgi` = Etiketlenen kişinin uyarı bilgisini görürsünüz.")
return message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'moderasyon-sistemi',
  description: "abcssdsaasd"

};