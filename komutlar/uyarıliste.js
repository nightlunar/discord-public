const discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json")
exports.run = async(client , message, args) => {
  if(!message.member.roles.cache.has(db.fetch(`uyarıyetkilirol_${message.guild.id}`))) {
    return message.channel.send("Bu Komutu sadece uyarı yetkilisi kullanabilir!");
  }
  let user;

  if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    const member = message.guild.member(user);
    let engin = db.fetch(`uyarısebep_${message.guild.id}.${user.id}`)
    if(engin == undefined) {
      let enginar = db.fetch(`uyarısayı_${message.guild.id}.${user.id}`)
      if(enginar == enginar) {var enginarr = enginar}
      if(enginar == undefined) {var enginarr = "0"}
      const embed = new discord.MessageEmbed()
      .setTitle(user.username + " kişisinin uyarı sayısı ve sebepleri")
  .setDescription(`Uyarı sayısı: ${enginarr} \n \n Uyarı yok`)
      return message.channel.send(embed)
    }
    let enginar = db.fetch(`uyarısayı_${message.guild.id}.${user.id}`)
    if(enginar == enginar) {var enginarr = enginar}
    if(enginar == undefined) {var enginarr = "0"}
    const embed = new discord.MessageEmbed()
    .setTitle(user.username + " kişisinin uyarı sayısı ve sebepleri")
.setDescription(`Uyarı sayısı: ${enginarr} \n \n`+ engin.join("\n\n"),{split:true})
    return message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'uyarı-bilgi'
  };