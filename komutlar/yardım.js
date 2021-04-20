const Discord = require('discord.js');
exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed()
.setTitle(':scroll:  Yardım Menüsü  :scroll:')
.setDescription("`!kayıt-sistemi` = Kayıt yardım menüsünü görürsünüz. \n \n `!tag-sistemi` = Tag sistemini görürsünüz. \n \n `!log-sistemi` = Log sistemini görürsünüz. \n \n `!yardımcı-sistemler` = Yardımcı sistemleri görürsünüz. \n \n `!güvenlik-sistemi` = Güvenlik sistemini görürsünüz. \n \n `!moderasyon-sistemi` = Moderasyon sistemini görürsünüz.")
return message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: "abcssdsaasd"

};