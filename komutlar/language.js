const Discord = require("discord.js")
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "tr") {
    let dil = args[0];
    if (!dil) {
      message.channel.send(
        "please specify a language, en or tr"
      );
      return;
    }
    if (dil === "en") {
      db.set(`dil_${message.guild.id}`, dil);
      message.channel.send(`__New language set to \`${dil}\`!__`);
    } else if (dil === "TR_tr") {
      db.set(`dil_${message.guild.id}`, dil);
      message.channel.send(`__Yeni dil \`${dil}\` olarak ayarlandı!__`);
    } else {
      message.channel.send("__Error! Recognized languages are: `tr`, `en`__");
      return;
    }
  } else {
    let dil = args[0];
    if (!dil) {
      message.channel.send(
        "__Please specify a language! Languages: `tr`, `en`__"
      );
      return;
    }
    if (dil === "en") {
      db.set(`dil_${message.guild.id}`, dil);
      message.channel.send(`__New language set to \`${dil}\`!__`);
    } else if (dil === "tr") {
      db.set(`dil_${message.guild.id}`, dil);
      message.channel.send(`__Yeni dil \`${dil}\` olarak ayarlandı!__`);
    } else {
      message.channel.send(
        "__Incorrect language! Languages: `tr`, `en`__"
      );
      return;
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["language", "lang", "dil"],
  permLevel: 3
};

exports.help = {
  name: "dil",
  description: "dil",
  usage: "dil"
};