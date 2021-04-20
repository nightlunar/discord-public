const Discord = require("discord.js")
const ayarlar = require('../ayarlar.json')
exports.run = async(client, message, args) => {
    let prefix = ayarlar.prefix
    const embed = new Discord.MessageEmbed()
    .setTitle('Güvenlik sistemi komutları!')
    .setDescription(`${prefix}botkoruma log = Bot koruma log ayarlarsınız. \n \n ${prefix}botkoruma aç = Bot koruma sistemini açarsınız. \n \n ${prefix}botkoruma kapat = Bot koruma sistemini kapatırsınız. \n \n ${prefix}botkoruma yardım = Bot koruma yardım menüsünü görürsünüz. \n \n ${prefix}botkoruma izin-ver = Bota giriş izni verirsiniz. \n \n ${prefix}botkoruma giriş-izni-kaldır = Botun giriş iznini kaldırırsınız. \n \n ${prefix}botkoruma kara-liste-ekle = Bir kullanıcıyı kara listeye eklersiniz. \n \n ${prefix}botkoruma kara-liste-kaldır = kara listeden kullanıcıyı kaldırırsınız. \n \n ${prefix}kick-limit ayarla <sayı> = Kick limit ayarlarsınız. \n \n ${prefix}kick-limit sıfırla = Kick limit sıfırlarsınız. \n \n ${prefix}ban-kimit ayarla <sayı> = Ban limit ayarlarsınız. \n \n ${prefix}ban-limit sıfırla = Ban limit sıfırlarsınız. \n \n ${prefix}kanal-limit ayarla = kanal silme limit ayarlarsınız. \n \n ${prefix}kanal-limit sıfırla = Kanal silme limit sıfırlarsınız.`)
    .setColor('BLACK')
    message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'güvenlik-sistemi'
};