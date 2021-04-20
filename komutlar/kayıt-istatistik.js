const Discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json")
const bt = require('best-tools')
exports.run = async (client, message, args) => {
    let user;

    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
      } else {
          user = message.author;
      }
  
      const member = message.guild.member(user);
      let engin = db.fetch(`kayıtsayıerkek_${message.guild.id}.${user.id}`)
      let enginar = db.fetch(`kayıtsayıkız_${message.guild.id}.${user.id}`)
      if(engin == engin) {var erkeksayı = engin}
      if(engin == undefined) {var erkeksayı = "0"}
      if(enginar == enginar) {var kızsayı = enginar}
      if(enginar == undefined) {var kızsayı = "0"}
    let toplam =  bt.hesapla(erkeksayı + kızsayı)
      const embed = new Discord.MessageEmbed()
      .setTitle(user.username + " adlı kişinin istatistiği!")
      .setDescription(`Erkek kayıt sayısı: ${erkeksayı} \n \n Kız kayıt sayısı: ${kızsayı} \n \n Toplam kayıt sayısı: ${toplam}`)
      return message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kayıt-istatistik',
  description: "abcssdsaasd"

};