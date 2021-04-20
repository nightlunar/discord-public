const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

  run: async (bot, message, args) => {



    const prefix = require('quick.db').fetch(`prefix_${message.guild.id}`) || `n!` 

    let kontrol =  db.fetch(`dil_${message.guild.id}`);
    if (kontrol == "tr") {
  




    if (!message.member.hasPermission(`MANAGE_EMOJIS`)) {
      return message.channel.send(
        new MessageEmbed().setDescription(
          `Bu komutu kullanma yetkin bulunmuyor!`
        )
      );
    }

    const emoji = args[0];
    if (!emoji)
      return message.channel.send(
        new MessageEmbed().setDescription(`Lütfen silmem için bir emoji verin. \nÖrnek : ${prefix}emoji-sil :fish:`).setColor("BLUE")
      );
    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;
      const name = args.slice(1).join(" ");
      message.guild.emojis.resolve(customemoji.id).delete();

      if (!message.guild.emojis.resolve(customemoji.id))
        return message.channel.send(`Bu emoji bulunduğunuz sunucuda değil...`);

      const Added = new MessageEmbed().setDescription(
        `Emoji başarı ile silindi.`
      ).setColor("BLUE");
      return message.channel.send(Added);
    } else {
      let CheckEmoji = parse(emoji, { assetType: "png" });
      if (!CheckEmoji[0])
        return message.channel.send(
          new MessageEmbed().setDescription(`Lütfen silmem için bir emoji verin. \nÖrnek : ${prefix}emoji-sil :fish:`).setColor("BLUE")
        );
      message.channel.send(
        new MessageEmbed().setDescription(
          `Şaka dimi bu, hehe şaka yapıyor benimle...`
        ).setColor("BLUE")
      );
    }
  } else {

    if (!message.member.hasPermission(`MANAGE_EMOJIS`)) {
        return message.channel.send(
          new MessageEmbed().setDescription(
            `You don't have enough permissions to use this command!`
          )
        );
      }
  
      const emoji = args[0];
      if (!emoji)
        return message.channel.send(
          new MessageEmbed().setDescription(`Please provide an emoji for me to throw at hell. \nExample : ${prefix}del-emoji :fish:`).setColor("BLUE")
        );
      let customemoji = Discord.Util.parseEmoji(emoji);
  
      if (customemoji.id) {
        const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
          customemoji.animated ? "gif" : "png"
        }`;
        const name = args.slice(1).join(" ");
        message.guild.emojis.resolve(customemoji.id).delete();
  
        if (!message.guild.emojis.resolve(customemoji.id))
          return message.channel.send(`That emoji doesn't exist in this server.`);
  
        const Added = new MessageEmbed().setDescription(
          `Emoji has been removed.`
        ).setColor("BLUE");
        return message.channel.send(Added);
      } else {
        let CheckEmoji = parse(emoji, { assetType: "png" });
        if (!CheckEmoji[0])
          return message.channel.send(
            new MessageEmbed().setDescription(`Please provide an emoji for me to throw at hell. \nExample : ${prefix}del-emoji :fish:`).setColor("BLUE")
          );
        message.channel.send(
          new MessageEmbed().setDescription(
            `You can use normal emoji's everywhere so you don't need to remove that.`
          ).setColor("BLUE")
        );
      }
  }
  }
  

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['emoji-sil', 'del-emoji', 'sil-emoji', 'remove-emoji', 'del-em', 'emoji-delete', 'silin-emoji'],
    permLevel: 2
  };
  
  exports.help = {
    name: 'emoji sil',
    description: '',
    usage: ''
  };