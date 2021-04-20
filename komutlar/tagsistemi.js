const Discord = require('discord.js');
exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed()
.setTitle(':scroll:  Yardım Menüsü  :scroll:')
.setDescription("`!tag` = Tagınızı görürsünüz. \n \n `!tag rol ayarla` = Tag rol ayarlarsınız. \n \n `!tag rol sıfırla` = tag rol sıfırlarsınız. \n \n `!tag log` = Tag log ayarlarsınız. \n \n `!tag ayarla` = Tagınızı ayarlarsınız. \n \n `!tag sıfırla` = Tagınızı sıfırlarsınız. \n \n")
return message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tag-sistemi',
  description: "abcssdsaasd"

};