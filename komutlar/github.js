const { Discord, discord } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const moment = require("moment");
const fetch = require("node-fetch");
const db = require('quick.db')

exports.run = async (client, message, args) => {
     try {
        let kontrol = await db.fetch(`dil_${message.guild.id}`);
        if (kontrol == "tr") {
  if (!args[0]) return message.channel.send(`Please Give Me A Username!`)
    
  fetch(`https://api.github.com/users/${args.join('-')}`)
    .then(res => res.json()).then(body => {
      if(body.message) return message.channel.send(`Kişi bulunamadı!`);
    let { login, avatar_url, name, id, html_url, public_repos, followers, following, location, created_at, bio } = body;

            const embed = new MessageEmbed()
            .setAuthor(`${login} Bilgi!`, avatar_url)
            .setColor(`BLUE`)
            .setThumbnail(`${avatar_url}`)
            .addField(`Kullanıcı İsmi`, `${login}`)
            .addField(`ID`, `${id}`)
            .addField(`Bio`, `${bio || "Sunucunuza Netherı ekleyin!"}`)
            .addField(`Herkese Açık Proje Sayısı`, `${public_repos || "yok..."}`, true)
            .addField(`Takipçi Sayısı`, `${followers}`, true)
            .addField(`Takip Ettikleri`, `${following}`, true)
            .addField(`Bölge`, `${location || "Bölge yok"}`)
            .addField(`Oluşturulma tarihi`, moment.utc(created_at).format("dddd, MMMM, Do YYYY"))
            .setFooter(`Nether saygılar sunar! ${message.author.username}`)

            message.channel.send(embed);

    })
        } else {
            if (!args[0]) return message.channel.send(`Please Give Me A Username!`)
    
            fetch(`https://api.github.com/users/${args.join('-')}`)
              .then(res => res.json()).then(body => {
                if(body.message) return message.channel.send(`User Not Found | Please Give Me A Valid Username!`);
              let { login, avatar_url, name, id, html_url, public_repos, followers, following, location, created_at, bio } = body;
          
                      const embed = new MessageEmbed()
                      .setAuthor(`${login} Information!`, avatar_url)
                      .setColor(`BLUE`)
                      .setThumbnail(`${avatar_url}`)
                      .addField(`Username`, `${login}`)
                      .addField(`ID`, `${id}`)
                      .addField(`Bio`, `${bio || "No Bio"}`)
                      .addField(`Public Repositories`, `${public_repos || "None"}`, true)
                      .addField(`Followers`, `${followers}`, true)
                      .addField(`Following`, `${following}`, true)
                      .addField(`Location`, `${location || "No Location"}`)
                      .addField(`Account Created`, moment.utc(created_at).format("dddd, MMMM, Do YYYY"))
                      .setFooter(`Tysm For Using Me! ${message.author.username}`)
          
                      message.channel.send(embed);
          
              })
        }
        } catch (error) {
            console.log(`[Commands] [github] Getting Error In github Command :\n`, error);
            return message.channel.send(`Something Went Wrong Try Again Later!`)
        }
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['github'],
    permLevel: 0
  };
  
  exports.help = {
    name: "github",
    description: "Afk Olmanızı Sağlar.",
    usage: "afk / afk "
  };
  