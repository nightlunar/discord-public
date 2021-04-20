const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const db = require('quick.db')

exports.run = (client, message, args, member) => {

  const prefix = require('quick.db').fetch(`prefix_${message.guild.id}`) || `n!` 

  let kontrol =  db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "tr") {

   

  

    const emoji = args[0];
    if (!emoji)
      return message.channel.send(
        new MessageEmbed().setDescription("Lütfen bir emoji ekleyim. \nÖrnek : ${prefix}emoji-çal :fish:")
        .setColor("BLUE")
      );

    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;
      const name = args.slice(1).join(" ");
      message.guild.emojis.create(
        `${Link}`,
        `${name || `${customemoji.name}`}`
      );
      const Added = new MessageEmbed().setDescription(`Emoji Eklendi.`)
      .setColor("BLUE");
      return message.channel.send(Added);
    } else {
      let CheckEmoji = parse(emoji, { assetType: "png" });
      if (!CheckEmoji[0])
        return message.channel.send(
          new MessageEmbed().setDescription("Lütfen doğru bir emoji söyleyin. \nÖrnek : ${prefix}emoji-çal :fish:")
          .setColor("BLUE")
        );
      message.channel.send(
        new MessageEmbed().setDescription(
          "Artık bu emojiyi kullanabilirsin."
        ).setColor("BLUE")
      );
    }


  }

else {

  const emoji = args[0];
  if (!emoji)
    return message.channel.send(
      new MessageEmbed().setDescription("Please provide an emoji. \nExample : ${prefix}emoji :fish:")
      .setColor("BLUE")
    );

  let customemoji = Discord.Util.parseEmoji(emoji);

  if (customemoji.id) {
    const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
      customemoji.animated ? "gif" : "png"
    }`;
    const name = args.slice(1).join(" ");
    message.guild.emojis.create(
      `${Link}`,
      `${name || `${customemoji.name}`}`
    );
    const Added = new MessageEmbed().setDescription(`Emoji added.`)
    .setColor("BLUE");
    return message.channel.send(Added);
  } else {
    let CheckEmoji = parse(emoji, { assetType: "png" });
    if (!CheckEmoji[0])
      return message.channel.send(
        new MessageEmbed().setDescription("Please provide a valid emoji. \nExample : ${prefix}emoji :fish:")
        .setColor("BLUE")
      );
    message.channel.send(
      new MessageEmbed().setDescription(
        "You can use normal emojis without adding it to a server."
      ).setColor("BLUE")
    );
  }
}

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['emoji-çal', 'emoji-al', 'add-emoji', 'steal-emoji', 'emoji-ekle', 'take-emoji'],
    permLevel: 2
  };
  
  exports.help = {
    name: 'emoji çal',
    description: '',
    usage: ''
  };