const Discord = require('discord.js');
const qdb = require('quick.db');
const ms = require("ms");
const db = require('quick.db');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./database/systems.json');
const sdb = low(adapter);

exports.run = async (client, message, args) => {    







    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    if (kontrol == "tr") {
        var msg = message;
        sdb.read()
        var muterole1 = qdb.fetch(`muteroluid_${message.guild.id}`);
        var muterole2 = message.guild.roles.cache.find(r => r.id === muterole1);
        if (!muterole2) {
            try {
             muterole2 = await message.guild.roles.create({ 
                    data: {
                        name: "Muted",
                        color: "#1800FF",
                        permissions: []
                      },
                    reason: 'Nether Mute Rolü' 
                    })
                qdb.set(`muteroluid_${message.guild.id}`, muterole2.id);
                message.guild.channels.cache.forEach(async (channel) => {
                    await channel.createOverwrite(muterole2, {
                          SEND_MESSAGES: false,
                          ADD_REACTIONS: false,
                          CONNECT: false
                      });
                  });
        } catch (err) {
            console.log(err);
        }
        };



var hata1 = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription('susturmam için bir kullanıcı belirt');








        var kisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if (!kisi) return message.reply(hata1);
        var time = args[1];
        var reason = args.slice(2).join(" ")
        if (!time) {
            if(reason) {
                if(!sdb.get('mute').find({guild: message.guild.id, user: kisi.id}).value()) {
                    let obj12 = {guild: msg.guild.id, guild_name: msg.guild.name, user: kisi.id, user_name: kisi.user.username, staff: msg.author.id, staff_username: message.author.username, channel: message.channel.id, channel_name: message.channel.name, reason: reason, time: "INFINITY", finishtime: "INFINITY"}
                    sdb.get('mute').push(obj12).write()
                    } else {
                        let obj12 = {guild: msg.guild.id, guild_name: msg.guild.name, user: kisi.id, user_name: kisi.user.username, staff: msg.author.id, staff_username: message.author.username, channel: message.channel.id, channel_name: message.channel.name, reason: reason, time: "INFINITY", finishtime: "INFINITY"}
                        sdb.get('mute').find({guild: msg.guild.id, user: kisi.id}).assign(obj12).write()
                    }
                    if(!kisi.roles.cache.has(muterole2.id)) await kisi.roles.add(muterole2.id);



                    var hata2 = new Discord.MessageEmbed()
                    .setColor('BLUE')
                    .setDescription(`${kisi} **SINIRSIZ** Şekilde Susturuldu!\nNedeni: **${reason}**\nYetkili: **${message.author}**`);
                    


                message.channel.send(hata2);
            } else {
                if(!sdb.get('mute').find({guild: message.guild.id, user: kisi.id}).value()) {
                    let obj12 = {guild: msg.guild.id, guild_name: msg.guild.name, user: kisi.id, user_name: kisi.user.username, staff: msg.author.id, staff_username: message.author.username, channel: message.channel.id, channel_name: message.channel.name, reason: "No Reason Given", time: "INFINITY", finishtime: "INFINITY"}
                    sdb.get('mute').push(obj12).write()
                    } else {
                        let obj12 = {guild: msg.guild.id, guild_name: msg.guild.name, user: kisi.id, user_name: kisi.user.username, staff: msg.author.id, staff_username: message.author.username, channel: message.channel.id, channel_name: message.channel.name, reason: "No Reason Given", time: "INFINITY", finishtime: "INFINITY"}
                        sdb.get('mute').find({guild: msg.guild.id, user: kisi.id}).assign(obj12).write()
                    }
                    if(!kisi.roles.cache.has(muterole2.id)) await kisi.roles.add(muterole2.id);
                   
                    var hata3 = new Discord.MessageEmbed()
                    .setColor('BLUE')
                    .setDescription(`${kisi} **SINIRSIZ** Şekilde Susturuldu!\nNedeni: **${reason}**\nYetkili: **${message.author}**`);

                message.channel.send(hata3);
            };
        } else {
            let finishtime = Date.now() + ms(time.replace(' dakika', 'm').replace(' saat', 'h').replace(' saniye', 's').replace(' gün', 'd'))
            if(reason){
                if(!sdb.get('mute').find({guild: message.guild.id, user: kisi.id}).value()) {
                    let obj12 = {guild: msg.guild.id, guild_name: msg.guild.name, user: kisi.id, user_name: kisi.user.username, staff: msg.author.id, staff_username: message.author.username, channel: message.channel.id, channel_name: message.channel.name, reason: reason, time: time, finishtime: finishtime}
                    sdb.get('mute').push(obj12).write()
                    } else {
                        let obj12 = {guild: msg.guild.id, guild_name: msg.guild.name, user: kisi.id, user_name: kisi.user.username, staff: msg.author.id, staff_username: message.author.username, channel: message.channel.id, channel_name: message.channel.name, reason: reason, time: time, finishtime: finishtime}
                        sdb.get('mute').find({guild: msg.guild.id, user: kisi.id}).assign(obj12).write()
                    }
                    if(!kisi.roles.cache.has(muterole2.id)) await kisi.roles.add(muterole2.id);

                    var hata4 = new Discord.MessageEmbed()
                    .setColor('BLUE')
                    .setDescription(`${kisi} **${time}** Süresince Şekilde Susturuldu!\nNedeni: **${reason}**\nYetkili: **${message.author}**`);

                message.channel.send(hata4);
                sdb.read()
                let bitiszamani = sdb.get('mute').find({guild: msg.guild.id, user: kisi.id}).value().finishtime
                if(bitiszamani && bitiszamani !== null && bitiszamani !== "INFINITY") {
                let ainterval = setInterval(function() {
                    if(bitiszamani <= Date.now()) {
                        clearInterval(ainterval)
                    if(kisi.roles.cache.find(r => r.id === muterole2.id)){
                        kisi.roles.remove(muterole2.id)
                        sdb.get('mute').remove(sdb.get('mute').find({guild:message.guild.id, user: kisi.id}).value()).write()

                        var hata6 = new Discord.MessageEmbed()
                        .setColor('BLUE')
                        .setDescription(`${kisi} Susturulma Süresi Dolduğu İçin Susturulması Kaldırılmıştır.`);
                      message.channel.send(hata6)
                    }
                }
                   }, 6000);
                }
            } else {
                if(!sdb.get('mute').find({guild: message.guild.id, user: kisi.id}).value()) {
                    let obj12 = {guild: msg.guild.id, guild_name: msg.guild.name, user: kisi.id, user_name: kisi.user.username, staff: msg.author.id, staff_username: message.author.username, channel: message.channel.id, channel_name: message.channel.name, reason: "No Reason Given", time: time, finishtime: finishtime}
                    sdb.get('mute').push(obj12).write()
                    } else {
                        let obj12 = {guild: msg.guild.id, guild_name: msg.guild.name, user: kisi.id, user_name: kisi.user.username, staff: msg.author.id, staff_username: message.author.username, channel: message.channel.id, channel_name: message.channel.name, reason: "No Reason Given", time: time, finishtime: finishtime}
                        sdb.get('mute').find({guild: msg.guild.id, user: kisi.id}).assign(obj12).write()
                    }
                    if(!kisi.roles.cache.has(muterole2.id)) await kisi.roles.add(muterole2.id);
                    var hata7 = new Discord.MessageEmbed()
                    .setColor('BLUE')
                    .setDescription(`${kisi} **${time}** Süresince Şekilde Susturuldu!\nYetkili: **${message.author}**`);
                message.channel.send(hata7);
                sdb.read()
                let bitiszamani = sdb.get('mute').find({guild: msg.guild.id, user: kisi.id}).value().finishtime
                if(bitiszamani && bitiszamani !== null && bitiszamani !== "INFINITY") {
                let ainterval = setInterval(function() {
                    if(bitiszamani <= Date.now()) {
                        clearInterval(ainterval)
                        if(kisi.roles.cache.find(r => r.id === muterole2.id)){
                            kisi.roles.remove(muterole2.id)
                            sdb.get('mute').remove(sdb.get('mute').find({guild:message.guild.id, user: kisi.id}).value()).write()

                            var hata9 = new Discord.MessageEmbed()
                            .setColor('BLUE')
                            .setDescription(`${kisi} Susturulma Süresi Dolduğu İçin Susturulması Kaldırılmıştır.`);
                          message.channel.send(hata9)
                        }
                    }
                   }, 6000);
                }
            }
        };
        
    }else{


        var msg = message;
        sdb.read()
        var muterole1 = qdb.fetch(`muteroluid_${message.guild.id}`);
        var muterole2 = message.guild.roles.cache.find(r => r.id === muterole1);
        if (!muterole2) {
            try {
             muterole2 = await message.guild.roles.create({ 
                    data: {
                        name: "Muted",
                        color: "#1800FF",
                        permissions: []
                      },
                    reason: 'Nether Mute Role' 
                    })
                qdb.set(`muteroluid_${message.guild.id}`, muterole2.id);
                message.guild.channels.cache.forEach(async (channel) => {
                    await channel.createOverwrite(muterole2, {
                          SEND_MESSAGES: false,
                          ADD_REACTIONS: false,
                          CONNECT: false
                      });
                  });
        } catch (err) {
            console.log(err);
        }
        };



var hata1 = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription('Mention a user for me to mute');








        var kisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if (!kisi) return message.reply(hata1);
        var time = args[1];
        var reason = args.slice(2).join(" ")
        if (!time) {
            if(reason) {
                if(!sdb.get('mute').find({guild: message.guild.id, user: kisi.id}).value()) {
                    let obj12 = {guild: msg.guild.id, guild_name: msg.guild.name, user: kisi.id, user_name: kisi.user.username, staff: msg.author.id, staff_username: message.author.username, channel: message.channel.id, channel_name: message.channel.name, reason: reason, time: "INFINITY", finishtime: "INFINITY"}
                    sdb.get('mute').push(obj12).write()
                    } else {
                        let obj12 = {guild: msg.guild.id, guild_name: msg.guild.name, user: kisi.id, user_name: kisi.user.username, staff: msg.author.id, staff_username: message.author.username, channel: message.channel.id, channel_name: message.channel.name, reason: reason, time: "INFINITY", finishtime: "INFINITY"}
                        sdb.get('mute').find({guild: msg.guild.id, user: kisi.id}).assign(obj12).write()
                    }
                    if(!kisi.roles.cache.has(muterole2.id)) await kisi.roles.add(muterole2.id);



                    var hata2 = new Discord.MessageEmbed()
                    .setColor('BLUE')
                    .setDescription(`${kisi} has been muted without a time period!\nReason: **${reason}**\nStaff: **${message.author}**`);
                    


                message.channel.send(hata2);
            } else {
                if(!sdb.get('mute').find({guild: message.guild.id, user: kisi.id}).value()) {
                    let obj12 = {guild: msg.guild.id, guild_name: msg.guild.name, user: kisi.id, user_name: kisi.user.username, staff: msg.author.id, staff_username: message.author.username, channel: message.channel.id, channel_name: message.channel.name, reason: "No Reason Given", time: "INFINITY", finishtime: "INFINITY"}
                    sdb.get('mute').push(obj12).write()
                    } else {
                        let obj12 = {guild: msg.guild.id, guild_name: msg.guild.name, user: kisi.id, user_name: kisi.user.username, staff: msg.author.id, staff_username: message.author.username, channel: message.channel.id, channel_name: message.channel.name, reason: "No Reason Given", time: "INFINITY", finishtime: "INFINITY"}
                        sdb.get('mute').find({guild: msg.guild.id, user: kisi.id}).assign(obj12).write()
                    }
                    if(!kisi.roles.cache.has(muterole2.id)) await kisi.roles.add(muterole2.id);
                   
                    var hata3 = new Discord.MessageEmbed()
                    .setColor('BLUE')
                    .setDescription(`${kisi} has been muted without a time period!\nReason: **${reason}**\nStaff: **${message.author}**`);

                message.channel.send(hata3);
            };
        } else {
            let finishtime = Date.now() + ms(time.replace(' minute', 'm').replace(' hours', 'h').replace(' seconds', 's').replace(' days', 'd'))
            if(reason){
                if(!sdb.get('mute').find({guild: message.guild.id, user: kisi.id}).value()) {
                    let obj12 = {guild: msg.guild.id, guild_name: msg.guild.name, user: kisi.id, user_name: kisi.user.username, staff: msg.author.id, staff_username: message.author.username, channel: message.channel.id, channel_name: message.channel.name, reason: reason, time: time, finishtime: finishtime}
                    sdb.get('mute').push(obj12).write()
                    } else {
                        let obj12 = {guild: msg.guild.id, guild_name: msg.guild.name, user: kisi.id, user_name: kisi.user.username, staff: msg.author.id, staff_username: message.author.username, channel: message.channel.id, channel_name: message.channel.name, reason: reason, time: time, finishtime: finishtime}
                        sdb.get('mute').find({guild: msg.guild.id, user: kisi.id}).assign(obj12).write()
                    }
                    if(!kisi.roles.cache.has(muterole2.id)) await kisi.roles.add(muterole2.id);

                    var hata4 = new Discord.MessageEmbed()
                    .setColor('BLUE')
                    .setDescription(`${kisi} has been muted for **${time}**!\nReason: **${reason}**\nStaff: **${message.author}**`);

                message.channel.send(hata4);
                sdb.read()
                let bitiszamani = sdb.get('mute').find({guild: msg.guild.id, user: kisi.id}).value().finishtime
                if(bitiszamani && bitiszamani !== null && bitiszamani !== "INFINITY") {
                let ainterval = setInterval(function() {
                    if(bitiszamani <= Date.now()) {
                        clearInterval(ainterval)
                    if(kisi.roles.cache.find(r => r.id === muterole2.id)){
                        kisi.roles.remove(muterole2.id)
                        sdb.get('mute').remove(sdb.get('mute').find({guild:message.guild.id, user: kisi.id}).value()).write()

                        var hata6 = new Discord.MessageEmbed()
                        .setColor('BLUE')
                        .setDescription(`${kisi} has been unmuted as their punishment is over`);
                      message.channel.send(hata6)
                    }
                }
                   }, 6000);
                }
            } else {
                if(!sdb.get('mute').find({guild: message.guild.id, user: kisi.id}).value()) {
                    let obj12 = {guild: msg.guild.id, guild_name: msg.guild.name, user: kisi.id, user_name: kisi.user.username, staff: msg.author.id, staff_username: message.author.username, channel: message.channel.id, channel_name: message.channel.name, reason: "No Reason Given", time: time, finishtime: finishtime}
                    sdb.get('mute').push(obj12).write()
                    } else {
                        let obj12 = {guild: msg.guild.id, guild_name: msg.guild.name, user: kisi.id, user_name: kisi.user.username, staff: msg.author.id, staff_username: message.author.username, channel: message.channel.id, channel_name: message.channel.name, reason: "No Reason Given", time: time, finishtime: finishtime}
                        sdb.get('mute').find({guild: msg.guild.id, user: kisi.id}).assign(obj12).write()
                    }
                    if(!kisi.roles.cache.has(muterole2.id)) await kisi.roles.add(muterole2.id);
                    var hata7 = new Discord.MessageEmbed()
                    .setColor('BLUE')
                    .setDescription(`${kisi} was muted for **${time}**!\nStaff: **${message.author}**`);
                message.channel.send(hata7);
                sdb.read()
                let bitiszamani = sdb.get('mute').find({guild: msg.guild.id, user: kisi.id}).value().finishtime
                if(bitiszamani && bitiszamani !== null && bitiszamani !== "INFINITY") {
                let ainterval = setInterval(function() {
                    if(bitiszamani <= Date.now()) {
                        clearInterval(ainterval)
                        if(kisi.roles.cache.find(r => r.id === muterole2.id)){
                            kisi.roles.remove(muterole2.id)
                            sdb.get('mute').remove(sdb.get('mute').find({guild:message.guild.id, user: kisi.id}).value()).write()

                            var hata9 = new Discord.MessageEmbed()
                            .setColor('BLUE')
                            .setDescription(`${kisi} was unmuted as their punishment is over.`);
                          message.channel.send(hata9)
                        }
                    }
                   }, 6000);
                }
            }
        };
        

















    }

};


exports.conf = {
  aliases: ['sustur', 'tempmute', 'mute'],
  permLevel: 2
};

exports.help = {
  name: 'mute',
  description: 'Sunucudaki Bir Kişiyi Susuturur.',
  usage: 'mute {@kullanici} {zaman} {sebep}'
};