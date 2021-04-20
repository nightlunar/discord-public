const fetch = require("node-superfetch"); // npm install node-superfetch
const Discord = require("discord.js");
const db = require('quick.db')

const config = "AIzaSyChebRusOAAmCjuwic9_V6Ivy-3BEGb5NI"


exports.run = async (client, message, args) => {
    let name = args.join(" ");
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    if (kontrol == "tr") {

      if (!name) return message.channel.send("bilinmeyen kanal ismi");

      const channel = await fetch.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=AIzaSyChebRusOAAmCjuwic9_V6Ivy-3BEGb5NI&maxResults=1&type=channel`)
      .catch(() => message.channel.send("Bilinmeyen kanal hatası."));
  
      if (!channel.body.items[0]) return message.channel.send("Kanal bulunamadı, yeniden dene.");
  
      const data = await fetch.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics,brandingSettings&id=${channel.body.items[0].id.channelId}&key=AIzaSyChebRusOAAmCjuwic9_V6Ivy-3BEGb5NI`)
      .catch(() => message.channel.send("Bilinmeyen kanal data hatası"));
  
      const embed = new Discord.MessageEmbed()
      .setColor(0x7289DA)
      .setThumbnail(channel.body.items[0].snippet.thumbnails.high.url)
      .setTimestamp(new Date())
      .addField("Kanal İsmi", channel.body.items[0].snippet.channelTitle, true)
      .addField("Kanal Açıklaması", channel.body.items[0].snippet.description, true)
      .addField("Abone Sayısı", parseInt(data.body.items[0].statistics.subscriberCount).toLocaleString(), true)
      .addField("Toplam İzlenmeler", parseInt(data.body.items[0].statistics.viewCount).toLocaleString(), true)
      .addField("Toplam video(lar)", parseInt(data.body.items[0].statistics.videoCount).toLocaleString(), true)
      .addField("Oluşturulma tarihi", new Date(channel.body.items[0].snippet.publishedAt).toDateString(), true)
      .addField("Kanal linki", `[${channel.body.items[0].snippet.channelTitle}](https://www.youtube.com/channel/${channel.body.items[0].id.channelId})`, true)
      return message.channel.send(embed);
  
   // türkçe

    }else{
      if (!name) return message.channel.send("This is an unknown channel");

      const channel = await fetch.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=AIzaSyChebRusOAAmCjuwic9_V6Ivy-3BEGb5NI&maxResults=1&type=channel`)
      .catch(() => message.channel.send("This is an unknown channel."));
  
      if (!channel.body.items[0]) return message.channel.send("No channel found, try later.");
  
      const data = await fetch.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics,brandingSettings&id=${channel.body.items[0].id.channelId}&key=AIzaSyChebRusOAAmCjuwic9_V6Ivy-3BEGb5NI`)
      .catch(() => message.channel.send("This is not a known channel"));
  
      const embed = new Discord.MessageEmbed()
      .setColor(0x7289DA)
      .setThumbnail(channel.body.items[0].snippet.thumbnails.high.url)
      .setTimestamp(new Date())
      .addField("Channel name: ", channel.body.items[0].snippet.channelTitle, true)
      .addField("Channel description: ", channel.body.items[0].snippet.description, true)
      .addField("Subscriber count: ", parseInt(data.body.items[0].statistics.subscriberCount).toLocaleString(), true)
      .addField("Total views: ", parseInt(data.body.items[0].statistics.viewCount).toLocaleString(), true)
      .addField("Total Video Count: ", parseInt(data.body.items[0].statistics.videoCount).toLocaleString(), true)
      .addField("Creation date: ", new Date(channel.body.items[0].snippet.publishedAt).toDateString(), true)
      .addField("Url for the channel", `[${channel.body.items[0].snippet.channelTitle}](https://www.youtube.com/channel/${channel.body.items[0].id.channelId})`, true)
      return message.channel.send(embed); // ingilizce
    }

};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['youtube', 'ytstats', 'youtube-ara'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'youtube',
    description: '',
    usage: ''
  };