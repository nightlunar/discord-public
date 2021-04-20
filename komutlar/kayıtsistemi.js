const Discord = require('discord.js');
exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed()
.setTitle(':scroll:  Kayıt Yardım Menüsü  :scroll:')
.setDescription("`!kayıt-ayarlar` = Kayıt ayarlar menüsünü görürsünüz. \n \n `!kayıt-ayarla kanal` = Kayıt kanalını ayarlarsınız. \n \n `!kayıt-ayarla log` = Kayıt log ayarlarsınız. \n \n `!kayıt-ayarla yetkili-rol` = Kayıt yetkili rol ayarlarsınız. \n \n`!kayıt-ayarla alınacak-rol` = Kayıt sırasında alınacak rolü ayarlarsınız. \n \n `!kayıt-ayarla erkek` = Erkek rolünü ayarlarsınız. \n \n `!kayıt-ayarla kız` = Kız rolünü ayarlarsınız. \n \n **GELİŞMİŞ SESLİ HOŞGELDİN SİSTEMİ** \n \n Biri ses kanalına katılınca hoşgeldin dememi istiyor musun :D kullanım: `!kayıt-ayarla ses-kanal <id>` \n \n Not: Aynı komutla birden fazla ses kanalı ekleyebilirsiniz! \n \n**__BİRİNİ KAYIT ETME__** \n **!kayıt @kişi <erkek/kız> <isim> <yaş>** \n \n**__Not: Tagınız ayarlanmışsa kayıt yaparken bot tag ile kayıt edebilir!__**")
return message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kayıt-sistemi',
  description: "abcssdsaasd"

};