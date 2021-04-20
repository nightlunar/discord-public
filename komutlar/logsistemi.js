const Discord = require('discord.js');
exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed()
.setTitle(':scroll:  Yardım Menüsü  :scroll:')
.setDescription("`!davet-log ayarla` = Davet log ayarlarsınız. \n \n `!davet-log sıfırla` = Davet log sıfırlarsınız. \n \n `!boost-log ayarla` = Boost log ayarlarsınız. \n \n `!boost-log sıfırla` = Boost log sıfırlarsınız. \n \n `!kanal-log ayarla` = Kanal log ayarlarsınız. \n \n `!kanal-log sıfırla` = Kanal log sıfırlarsınız. \n \n `!sunucu-log ayarla` = Sunuuc log ayarlarsınız. \n \n `!sunucu-log sıfırla` = Sunucu log sıfırlarsınız. \n \n `!rol-log ayarla` = Rol log ayarlarsınız. \n \n `!rol-log sıfırla` = Rol log ayarlarsınız. \n \n `!isim-log ayarla` = İsim log ayarlarsınız. \n \n `!isim-log sıfırla` = İsim log ayarlarsınız. \n \n `!ses-log ayarla` = Ses log ayarlarsınız. \n \n `!ses-log sıfırla` = Ses log sıfırlarsınız. \n \n `!sahip-log ayarla` = Sahip log ayarlarsınız. \n \n `!sahip-log sıfırla` = Sunucu sahip log sıfırlarsınız. \n \n `!mesaj-log ayarla` = Mesaj log ayarlarsınız. \n \n `!mesaj-log sıfırla` = Mesaj log sıfırlarsınız. \n \n `!ban-log ayarla` = Ban log ayarlarsınız. \n \n `!ban-log sıfırla` = Davet log sıfırlarsınız. \n \n `!kick-log ayarla` = Kick log ayarlarsınız. \n \n `!kick-log sıfırla` = Kick log sıfırlarsınız. \n \n `!log-kur` = Tüm logları tek kanala ayarlarsınız. \n \n `!log-sıfırla` = Tüm logları sıfırlarsınız.")
return message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'log-sistemi',
  description: "abcssdsaasd"

};