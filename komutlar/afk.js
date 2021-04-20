const Discord = require("discord.js");
const db = require("quick.db");



exports.run = async (client, message, args) => {

    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    if (kontrol == "tr") {
  

    const kisi = db.fetch(`afkid_${message.author.id}_${message.guild.id}`);
  if (kisi) return;
  const sebep = args[0];
  if (!args[0]) {
    let kullanıcı = message.guild.members.cache.get(message.author.id);
    const b = kullanıcı.displayName;



    await db.set(
      `afkSebep_${message.author.id}_${message.guild.id}`,
      "Sebep Girilmemiş"
    );


    await db.set(
      `afkid_${message.author.id}_${message.guild.id}`,
      message.author.id
    );
    await db.set(`afkAd_${message.author.id}_${message.guild.id}`, b);

    const a = await db.fetch(
      `afkSebep_${message.author.id}_${message.guild.id}`
    );


let basari1 = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(`Başarıyla Afk Oldunuz \nSebep: ${a}`)
    message.channel.send(basari1);

    message.member.setNickname(`AFK | ` + b);
  }
  if (args[0]) {
    let sebep = args.join(" ");
    let kullanıcı = message.guild.members.cache.get(message.author.id);
    const b = kullanıcı.displayName;
    await db.set(`afkSebep_${message.author.id}_${message.guild.id}`, sebep);
    await db.set(
      `afkid_${message.author.id}_${message.guild.id}`,
      message.author.id
    );
    await db.set(`afkAd_${message.author.id}_${message.guild.id}`, b);
    const a = await db.fetch(
      `afkSebep_${message.author.id}_${message.guild.id}`
    );
    let basari2 = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setDescription(`Başarıyla Afk Oldunuz \nSebep: ${a}`)
    message.channel.send(basari2);

    message.member.setNickname(`AFK | ` + b);
  }










} else {













    const kisi = db.fetch(`afkid_${message.author.id}_${message.guild.id}`);
    if (kisi) return;
    const sebep = args[0];
    if (!args[0]) {
      let kullanıcı = message.guild.members.cache.get(message.author.id);
      const b = kullanıcı.displayName;
  
  
  
      await db.set(
        `afkSebep_${message.author.id}_${message.guild.id}`,
        "No Reasoning"
      );
  
  
      await db.set(
        `afkid_${message.author.id}_${message.guild.id}`,
        message.author.id
      );
      await db.set(`afkAd_${message.author.id}_${message.guild.id}`, b);
  
      const a = await db.fetch(
        `afkSebep_${message.author.id}_${message.guild.id}`
      );
  
  
  let basari1 = new Discord.MessageEmbed()
  .setColor('BLUE')
  .setDescription(`You've walked away from your keyboard \nReason: ${a}`)
      message.channel.send(basari1);
  
      message.member.setNickname(`AFK | ` + b);
    }
    if (args[0]) {
      let sebep = args.join(" ");
      let kullanıcı = message.guild.members.cache.get(message.author.id);
      const b = kullanıcı.displayName;
      await db.set(`afkSebep_${message.author.id}_${message.guild.id}`, sebep);
      await db.set(
        `afkid_${message.author.id}_${message.guild.id}`,
        message.author.id
      );
      await db.set(`afkAd_${message.author.id}_${message.guild.id}`, b);
      const a = await db.fetch(
        `afkSebep_${message.author.id}_${message.guild.id}`
      );
      let basari2 = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setDescription(`You've walked away from your keyboard \nReason: ${a}`)
      message.channel.send(basari2);
  
      message.member.setNickname(`AFK | ` + b);
    }
}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afk', 'be-afk', 'setafk'],
  permLevel: 0
};

exports.help = {
  name: "afk",
  description: "Afk Olmanızı Sağlar.",
  usage: "afk / afk "
};
