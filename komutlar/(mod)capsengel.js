const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  let acod = ["ayarla", "aç", "ac", "on", "open", "activate", "set", "açıl"];
  let kapare = ["kapat", "sıfırla", "sifirla", "close", "off", "reset", "do not"];
 
 
 
 

  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "tr") {
  let acikmi = await db.fetch(`${message.guild.id}.capsengel`);
  let aredembed = new Discord.MessageEmbed()
    .setAuthor("CapsLock Engelleme")
    .setColor("RED")
    .setFooter(
      `Komut ${message.author.username} tarafından kullanıldı.`,
      message.author.displayAvatarURL({ dynamic: true })
    )
    .setTimestamp();
  if (acod.includes(args[0])) {
    if (!args[1]) {
      if (acikmi)
        return message.channel.send(
          aredembed.setDescription(
            ":x: CapsLock Engelleme sitemi zaten açık bulunmakta!\nBir mesajdaki büyük harf oranı eğer mesajın `" +
              acikmi.yuzde +
              "` sinden daha fazla ise engelenecektir.\nEğerki bu oranı arttırmak veya azaltmak isterseniz `!capsengel aç oran` (Oran 101 den küçük, 0 dan büyük bir sayı olmalıdır!)\nEğer CapsLock Engelleme sistemini kapatmak isterseniz `!capsengel sıfırla` komutunu kullanabilirsiniz."
          )
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("GREEN")
          .setAuthor("CapsLock Engelleme")
          .setDescription(
            "CapsLock Engelleme sistemi başarıyla açıldı!\nBir mesajdaki büyük harf oranı eğer mesajın `50%` sinden daha fazla ise engelenecektir.\nEğerki bu oranı arttırmak veya azaltmak isterseniz `!capsengel aç oran` (Oran 101 den küçük, 0 dan büyük bir sayı olmalıdır!)\nEğer CapsLock Engelleme sistemini kapatmak isterseniz `!capsengel sıfırla` komutunu kullanabilirsiniz."
          )
          .setFooter(
            `Komut ${message.author.username} tarafından kullanıldı.`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
      );
      db.set(`${message.guild.id}.capsengel`, { yuzde: "50" });
    } else {
      if (isNaN(args[1]))
        return message.channel.send(
          aredembed.setDescription(
            "Oran yalnızca bir **sayı** olmalıdır. (Oran 101 den küçük 0 dan büyük bir sayı olmalıdır!)"
          )
        );
      if (args[1] >= 101)
        return message.channel.send(
          aredembed.setDescription(
            "**Oran 101 den küçük**, 0 dan büyük bir sayı olmalıdır!"
          )
        );
      if (args[1] <= 0)
        return message.channel.send(
          aredembed.setDescription(
            "Oran 101 den küçük, **0 dan büyük bir sayı olmalıdır**!"
          )
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("GREEN")
          .setAuthor("CapsLock Engelleme")
          .setDescription(
            "CapsLock Engelleme sistemi başarıyla açıldı!\nBir mesajdaki büyük harf oranı eğer mesajın `" +
              args[1] +
              "%` sinden daha fazla ise engelenecektir.\nEğerki bu oranı arttırmak veya azaltmak isterseniz `!capsengel aç oran` (Oran 101 den küçük, 0 dan büyük bir sayı olmalıdır!)\nEğer CapsLock Engelleme sistemini kapatmak isterseniz `!capsengel sıfırla` komutunu kullanabilirsiniz.\nNot: Eğer oran yazmazsanız otomatik olarak 50% olarak ayarlanacaktır."
          )
          .setFooter(
            `Komut ${message.author.username} tarafından kullanıldı.`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
      );
      db.set(`${message.guild.id}.capsengel`, { yuzde: args[1] });
    }
  } else if (kapare.includes(args[0])) {
    if (!acikmi)
      return message.channel.send(
        aredembed.setDescription(
          "CapsLock Engelleme sistemi zaten kapalı.\nEğer açmak isterseniz `!capsengel aç oran` yazabilirsiniz. (Oran 101 den küçük, 0 dan büyük bir sayı olmalıdır!)\nNot: Eğer oran yazmazsanız otomatik olarak 50% olarak ayarlanacaktır."
        )
      );
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setAuthor("CapsLock Engelleme")
        .setDescription(
          "CapsLock Engelleme sistemi başarıyla kapatıldı!\nArtık mesajlardaki büyük harfler engellenmeyecek. \nEğer tekrar açmak isterseniz `!capsengel aç oran` komutunu kullanabilirsiniz. (Oran 101 den küçük, 0 dan büyük bir sayı olmalıdır!)\nNot: Eğer oran yazmazsanız otomatik olarak 50% olarak ayarlanacaktır."
        )
        .setFooter(
          `Komut ${message.author.username} tarafından kullanıldı.`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
    );
    db.delete(`${message.guild.id}.capsengel`);
  } else {
    let acikkk;
    if (acikmi)
      acikkk = `${acikmi.yuzde}% olarak Açık**\nEğer kapatmak isterseniz \`!capsengel sıfırla\` yazabilirsiniz.`;
    let kodare = new Discord.MessageEmbed()
      .setAuthor("CapsLock Engelleme")
      .setColor("#728bd6")
      .setDescription(
        "CapsLock Engelleme sistemi şu anda **" +
          (acikkk
            ? acikkk
            : "Kapalı**\nEğer açmak isterseniz `!capsengel aç` yazabilirsiniz.") +
          "."
      )
      .setFooter(
        `Komut ${message.author.username} tarafından kullanıldı.`,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp();
    message.channel.send(kodare)
  

}} 














else 






{
    let acikmi = await db.fetch(`${message.guild.id}.capsengel`);
    let aredembed = new Discord.MessageEmbed()
      .setAuthor("CapsLock Blocking")
      .setColor("RED")
      .setFooter(
        `Command Used By ${message.author.username}!`,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp();
    if (acod.includes(args[0])) {
      if (!args[1]) {
        if (acikmi)
          return message.channel.send(
            aredembed.setDescription(
              ":x: This feature is already on!\nYour current rate is set, if a user sends messages that include`" +
                acikmi.yuzde +
                "` .\npercent caps lock text the messages will be deleted `n!capslock on <value>`\nIf you want to close the caps lock blocing service type in `n!capslock reset`."
            )
          );
        message.channel.send(
          new Discord.MessageEmbed()
            .setColor("GREEN")
            .setAuthor("CapsLock Blocking")
            .setDescription(
              "Activated sucsessfuly!\nThe amount you selected for this option will be well used.\nYou can always close or open these features."
            )
            .setFooter(
              `Comamand suggested by; ${message.author.username}!.`,
              message.author.displayAvatarURL({ dynamic: true })
            )
            .setTimestamp()
        );
        db.set(`${message.guild.id}.capsengel`, { yuzde: "50" });
      } else {
        if (isNaN(args[1]))
          return message.channel.send(
            aredembed.setDescription(
              "This value can only be a number even tho, %kladqw would look amazing!"
            )
          );
        if (args[1] >= 101)
          return message.channel.send(
            aredembed.setDescription(
              "Kid, I used to do these when I was little, just stop. It aint worth it :("
            )
          );
        if (args[1] <= 0)
          return message.channel.send(
            aredembed.setDescription(
              "THAT IS NOT HOW YOU ENTER A VALUEEEEEEEEEeeee, Im satan m8 dont make me angry!"
            )
          );
        message.channel.send(
          new Discord.MessageEmbed()
            .setColor("GREEN")
            .setAuthor("CapsLock Blocking")
            .setDescription(" Okay this is amazing mate, we did it. We set the value to whatever it is you said... YEY!"
            )
            .setFooter(
              `${message.author.username}`,
              message.author.displayAvatarURL({ dynamic: true })
            )
            .setTimestamp()
        );
        db.set(`${message.guild.id}.capsengel`, { yuzde: args[1] });
      }
    } else if (kapare.includes(args[0])) {
      if (!acikmi)
        return message.channel.send(
          aredembed.setDescription(
            "Next time do not close something you never opened, Im not your mom I can't deal with your paradoxes"
          )
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("YELLOW")
          .setAuthor("CapsLock System Thingie")
          .setDescription(
            "Alright, you\'ve closed this feature, now people can really SHOUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUT at you!"
          )
          .setFooter(
            `${message.author.username}`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
      );
      db.delete(`${message.guild.id}.capsengel`);
    } else {
      let acikkk;
      if (acikmi)
        acikkk = `${acikmi.yuzde}% is the capslock value for this server**\nIf you want to let people SHOUUUUUUUT at you you can type \n\`n!capslock reset\` have fun shouting!.`;
      let kodare = new Discord.MessageEmbed()
        .setAuthor("CapsLock System")
        .setColor("#728bd6")
        .setDescription(
          "The ststem thingie thing\'s value is:**" +
            (acikkk
              ? acikkk
              : "off") +
            "."
        )
        .setFooter(
          `${message.author.username}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp();
      message.channel.send(kodare)
    }
}}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [
    "buyukharfengelle",
    "caps-engelle",
    "capslockengelle",
    "capslock-engelle",
    "caps-engel",
    "capslock",
    "shouting-filter",
    "capsengel"
  ],
  permLevel: 4,
  kategori: "sunucu"
};
exports.help = {
  name: "capsengel",
  description:
    "Eğer açılırsa bir mesajda belirttiğiniz %de kadar harf büyük yazılmışsa o mesaj silinir.",
  usage: "capsengel aç/sıfırla oran (Oran 101 den küçük, 0 dan büyük bir sayı olmalıdır!)"
};
