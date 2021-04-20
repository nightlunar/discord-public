const Discord = require('discord.js');
exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed()
.setTitle(':scroll:  Yardım Menüsü  :scroll:')
.setDescription("`!gecikmeli-mesaj` = Bot yazdığınız şeyi belirli bir süre sonra gecikmeli olarak atar. \n \n `!oylama` = Oylama yaparsınız. \n \n `!bot-yazıyor` = Bot kanala yazıyor gibi gözükür. \n \n `!sohbet-kanal`= Sohbet kanalında bot belirli mesaj aralığında sohbete katılır.")
return message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardımcı-sistemler',
  description: "abcssdsaasd"

};