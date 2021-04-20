const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const { Client, Util } = require("discord.js");
require("./util/eventLoader.js")(client);
const fs = require("fs");
const logs = require('discord-logs');
logs(client);
const { Database } = require('nukleon');
const db = new Database("plasmic.json");
var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 7;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);
client.on("voiceChannelJoin", async(member, channel) => {
  const ytdl = require('ytdl-core');
const opus = require('opusscript');
let engin = db.fetch(`sesteyitkanal_${member.guild.id}.${channel.id}`)
if(!engin) return;
if(engin) {
  let kanal = await channel.join();
let oynat = await kanal.play(ytdl('https://www.youtube.com/watch?v=n6Tc3hAEWAo', { filter: 'audioonly' }));
}
})
client.on("inviteCreate", async invite => {
let log = db.fetch(`davetlog_${invite.guild.id}`)
if(!log) return
const embed = new Discord.MessageEmbed()
.setTitle('Bir Davet oluşturuldu!')
.setDescription(`${invite} url'sine sahip davet oluşturuldu! \n \n Davet kodu: ${invite.code}`)
client.channels.cache.get(log).send(embed)
})
client.on("inviteDelete", async invite => {
  let log = db.fetch(`davetlog_${invite.guild.id}`)
  if(!log) return
  const embed = new Discord.MessageEmbed()
  .setTitle('Bir Davet silindi!')
  .setDescription(`${invite} url'sine sahip davet silindi! \n \n Davet kodu: ${invite.code}`)
  client.channels.cache.get(log).send(embed)
  })
 
  client.on("guildMemberNicknameUpdate", (member, oldNickname, newNickname) => {
    if(member.bot == true) return;
    let log = db.fetch(`isimlog_${member.guild.id}`)
    if(!log) return
    let isimvar = newNickname
    if(isimvar == isimvar) {var isim = isimvar}
    if(isimvar == null) {var isim = member.user.username}
    let isimyok = oldNickname
    if(isimyok == isimyok) {var isimm = isimyok}
    if(isimyok == null) {var isimm = member.user.username}
    const embed = new Discord.MessageEmbed()
    .setTitle(`Bir kullanıcı sunucudaki ismini değişti!`)
    .setDescription(`<@${member.id}> adlı kullanıcı ${member.guild.name} adlı sunucuda ismini değişti! \n \n Eski isim: ${isimm} \n \n Yeni isim: ${isim}`)
    client.channels.cache.get(log).send(embed)
  })
  client.on("guildMemberBoost", (member) => {
    if(member.bot == true) return;
    let log = db.fetch(`boostlog_${member.guild.id}`)
    if(!log) return
    const embed = new Discord.MessageEmbed()
    .setTitle('Sunucuya boost basıldı!')
    .setDescription(`<@${member.id}> adlı kişi sunucumuza boost bastı!`)
    client.channels.cache.get(log).send(embed)
  });
  client.on("guildMemberUnboost", (member) => {
    if(member.bot == true) return;
    let log = db.fetch(`boostlog_${member.guild.id}`)
    if(!log) return
    const embed = new Discord.MessageEmbed()
    .setTitle('Sunucudan boost çekildi!')
    .setDescription(`<@${member.id}> adlı kişi sunucumuzdan boostunu çekti!`)
    client.channels.cache.get(log).send(embed)
  });
    client.on("guildChannelPermissionsUpdate", (channel, oldPermissions, newPermissions) => {
    let log = db.fetch(`kanallog_${channel.guild.id}`)
    if(!log) return
    const embed = new Discord.MessageEmbed()
    .setTitle('Bir kanalın izinleri güncellendi!')
    .addField('Kanal:', channel.name)
    .addField('İdi:', channel.id)
    client.channels.cache.get(log).send(embed)
  });
  client.on("guildAfkChannelAdd", (guild, afkChannel) => {
    let log = db.fetch(`kanallog_${guild.id}`)
    if(!log) return
const embed = new Discord.MessageEmbed()
.setTitle('Afk kanalı ayarlandı!')
.setDescription(`Afk kanalı <#${afkChannel.id}> olarak ayarlandı!`)
    client.channels.cache.get(log).send(embed)
  });
  client.on("guildRegionUpdate", (guild, oldRegion, newRegion) => {
    let log = db.fetch(`sunuculog_${guild.id}`)
    if(!log) return
    const embed = new Discord.MessageEmbed()
    .setTitle('Sunucu bölgesi değiştirildi!')
    .setDescription(`${guild.name} adlı sunucunun bölgesi değiştirildi! \n \n Eski bölge: ${oldRegion} \n Yeni bölge: ${newRegion}`)
    client.channels.cache.get(log).send(embed)
  });
  client.on("rolePermissionsUpdate", (role, oldPermissions, newPermissions) => {
    let log = db.fetch(`rollog_${role.guild.id}`)
    if(!log) return
    const embed = new Discord.MessageEmbed()
.setTitle('Bir rolün izinleri güncellendi!')
.setDescription(`<@&${role.id}> adlı rolün izinleri güncellendi! \n \n Eski izinler: ${oldPermissions} \n \n Yeni izinler: ${newPermissions}`)
    client.channels.cache.get(log).send(embed)
  });
  client.on("guildPartnerAdd", (guild) => {
    const { Database } = require('nukleon');
    const db = new Database("plasmic.json");
    let log = db.fetch(`sunuculog_${guild.id}`)
    if(!log) return
    const embed = new Discord.MessageEmbed()
    .setTitle('Sunucumuz partner oldu!')
    .setDescription('Partnerlik herkese hayırlı olsun!')
    client.channels.cache.get(log).send(embed)
  });
  client.on("guildPartnerRemove", (guild) => {
    const { Database } = require('nukleon');
    const db = new Database("plasmic.json");
    let log = db.fetch(`sunuculog_${guild.id}`)
    if(!log) return
    const embed = new Discord.MessageEmbed()
    .setTitle('Sunucumuzdan partnerlik alındı!')
    .setDescription('üzdü :(')
    client.channels.cache.get(log).send(embed)
  });
  client.on("guildVerificationAdd", (guild) => {
    const { Database } = require('nukleon');
    const db = new Database("plasmic.json");
    let log = db.fetch(`sunuculog_${guild.id}`)
    if(!log) return
    const embed = new Discord.MessageEmbed()
    .setTitle('Sunucumuz doğrulandı!')
    .setDescription('Herkese hayırlı olsun!')
    client.channels.cache.get(log).send(embed)
  });
  client.on("guildVerificationRemove", (guild) => {
    const { Database } = require('nukleon');
    const db = new Database("plasmic.json");
    let log = db.fetch(`sunuculog_${guild.id}`)
    if(!log) return
    const embed = new Discord.MessageEmbed()
    .setTitle('Sunucumuzun doğrulanmış rozeti kalktı!')
    .setDescription('üzdü :(')
    client.channels.cache.get(log).send(embed)
  });
 
  client.on("voiceChannelJoin", (member, channel) => {
    if(member.bot == true) return;
    const { Database } = require('nukleon');
  const db = new Database("plasmic.json")
  let log = db.fetch(`seslog_${member.guild.id}`)
  if(!log) return
    const embed = new Discord.MessageEmbed()
    .setTitle('Bir kullanıcı ses kanalına katıldı!')
    .setDescription(`<@${member.id}> adlı kullanıcı <#${channel.id}> adlı ses kanalına katıldı!`)
  client.channels.cache.get(log).send(embed)
  });
  client.on("voiceChannelLeave", (member, channel) => {
    if(member.bot == true) return;
    const { Database } = require('nukleon');
  const db = new Database("plasmic.json");
  let log = db.fetch(`seslog_${member.guild.id}`)
  if(!log) return
    const embed = new Discord.MessageEmbed()
    .setTitle('Bir kullanıcı ses kanalından ayrıldı!')
    .setDescription(`<@${member.id}> adlı kullanıcı <#${channel.id}> adlı ses kanalından ayrıldı!`)
  client.channels.cache.get(log).send(embed)
  });
  client.on("guildOwnerUpdate", (oldGuild, newGuild) => {
    const { Database } = require('nukleon');
  const db = new Database("plasmic.json")
      let log = db.fetch(`sahiplog_${oldGuild.id}`)
      if(!log) return
    const embed = new Discord.MessageEmbed()
    .setTitle('Sunucu sahibi değişti!')
    .setDescription(`<@${oldGuild.owner.id}> adlı kişi sunucu sahipliğini ${oldGuild.name} adlı sunucuda <@${newGuild.owner.id}> adlı kişiye devretti!`)
    client.channels.cache.get(log).send(embed)
  
  });
  client.on("guildMemberRoleAdd", (member, role) => {
    if(member.bot == true) return;
    const { Database } = require('nukleon');
    const db = new Database("plasmic.json")
      let log = db.fetch(`rollog_${member.guild.id}`)
      if(!log) return
      const embed = new Discord.MessageEmbed()
      .setTitle(member.user.username + ' adlı kişiye rol verildi!')
      .setDescription(`__**KİŞİ BİLGİLERİ**__ \n \n Kişi: <@${member.id}> \n \n idi: ${member.id}  \n \n __**ROL BİLGİLERİ**__ \n \n Rol: <@&${role.id}> \n \n Rol id: ${role.id} \n \n Rol ismi: ${role.name}`) 
      client.channels.cache.get(log).send(embed)
    });
    client.on("guildMemberRoleRemove", (member, role) => {
      if(member.bot == true) return;
    const { Database } = require('nukleon');
    const db = new Database("plasmic.json")
      let log = db.fetch(`rollog_${member.guild.id}`)
      if(!log) return
      const embed = new Discord.MessageEmbed()
      .setTitle(member.user.username + ' adlı kişiden rol alındı!')
      .setDescription(`__**KİŞİ BİLGİLERİ**__ \n \n Kişi: <@${member.id}> \n \n idi: ${member.id}  \n \n __**ROL BİLGİLERİ**__ \n \n Rol: <@&${role.id}> \n \n Rol id: ${role.id} \n \n Rol ismi: ${role.name}`) 
      client.channels.cache.get(log).send(embed)
    });
    client.on("messageDelete", async message => {
      if(message.author.bot) return;
      let engin = db.fetch(`mesajlog_${message.guild.id}`)
      if(!engin) return;
      const embed2 = new Discord.MessageEmbed()
      .setTitle('Bir mesaj silindi!')
      .setDescription(`__**Kişi Bilgileri**__ \n Silen kişi: <@${message.author.id}> \n Silen kişinin idi: ${message.author.id} \n \n __**Kanal Bilgileri**__ \n Silinen Kanal: <#${message.channel.id}> \n Silinen Kanalın idi: ${message.channel.id} \n \n __**Mesaj Bilgileri**__ \n Silinen mesaj: ${message.content} \n Silinen Mesajın İdi: ${message.id}`)
      .setColor('RANDOM')
     client.channels.cache.get(engin).send(embed2)
    })
    client.on("messageUpdate", async (oldMessage, newMessage) => {
      let engin = db.fetch(`mesajlog_${oldMessage.guild.id}`)
      if(!engin) return;
      if(oldMessage.author.bot) return;
      const embed = new Discord.MessageEmbed()
      .setTitle('Bir mesaj düzenlendi!')
      .setDescription(`__**Kişi Bilgileri**__ \n Düzenleyen kişi: <@${oldMessage.author.id}> \n Düzenleyen kişinin idi: ${oldMessage.author.id} \n \n __**Kanal Bilgileri**__ \n Düzenlenen Kanal: <#${oldMessage.channel.id}> \n Düzenlenen kanalın idi: ${oldMessage.channel.id} \n \n __**Mesaj Bilgileri**__ \n Düzenlenen mesaj: ${oldMessage.content} \n Düzenlenen mesajın yeni hali: ${newMessage.content} \n Düzenlenen mesajın idi: ${oldMessage.id} \n [Düzenlenen mesaja gitmek için tıkla](${oldMessage.url})`)
      .setColor('RANDOM')
      client.channels.cache.get(engin).send(embed)
      
    
    });
    client.on("messagePinned", (message) => {
      if(message.member.bot) return;
      let log = db.fetch(`mesajlog_${message.guild.id}`)
      if(!log) return
      const embed = new Discord.MessageEmbed()
      .setTitle('Bir mesaj sabitlendi!')
      .setDescription(`<@${message.author.id}> adlı kişi bir mesaj sabitledi! \n \n [Sabitlenen mesaja gitmek için tıkla](${message.url})`)
      client.channels.cache.get(log).send(embed)
    });
    //
    client.on('guildBanAdd', async (guild, user) => {
      const fetchedLogs = await guild.fetchAuditLogs({
          limit: 1,
          type: 'MEMBER_BAN_ADD',
      });
      if(!fetchedLogs) return
      const banLog = fetchedLogs.entries.first();
      if (!banLog) return console.log(`hata 404 error inga :(`);
      const { executor, target } = banLog;
      if(executor.bot) return;
      let log = db.fetch(`banlog_${guild.id}`)
      if(!log) return
      const embed = new Discord.MessageEmbed()
      .setTitle('Bir kullanıcı banlandı!')
      .setDescription(`<@${executor.id}> adlı kullanıcı <@${user.id}> adlı kişiyi sunucudan banladı!`)
      client.channels.cache.get(log).send(embed)
   })
   client.on('guildMemberRemove', async member => {
    const fetchedLogs = await member.guild.fetchAuditLogs({
        limit: 1,
        type: 'MEMBER_KICK',
    });
    if(!fetchedLogs) return
    const kickLog = fetchedLogs.entries.first();
    if (!kickLog) return console.log(`404 error inga :(`);
    const { executor, target } = kickLog;
    if(executor.bot) return;
    let log = db.fetch(`kicklog_${member.guild.id}`)
    if(!log) return
    const embed = new Discord.MessageEmbed()
    .setTitle('Bir kullanıcı atıldı!')
    .setDescription(`<@${executor.id}> adlı kullanıcı <@${member.id}> adlı kişiyi sunucudan attı!`)
    client.channels.cache.get(log).send(embed)
 })
 client.on("roleCreate", async role => {
  let log = db.fetch(`rollog_${role.guild.id}`)
  if(!log) return
  const embed = new Discord.MessageEmbed()
  .setTitle('Bir rol oluşturuldu!')
  .setDescription(`Rol adı: ${role.name} \n Rol idi: ${role.id} \n Rol pozisyonu: ${role.position} \n Rol rengi: ${role.hexColor}`)
  client.channels.cache.get(log).send(embed)
 })
 client.on("roleDelete", async role => {
  let log = db.fetch(`rollog_${role.guild.id}`)
  if(!log) return
  const embed = new Discord.MessageEmbed()
  .setTitle('Bir rol silindi!')
  .setDescription(`Rol adı: ${role.name} \n Rol idi: ${role.id} \n Rol pozisyonu: ${role.position} \n Rol rengi: ${role.hexColor}`)
  client.channels.cache.get(log).send(embed)
 })
 client.on("guildMemberAdd", member => {
  const { Database } = require('nukleon');
  const db = new Database("plasmic.json");
  if (member.user.bot !== true) {

  } else {

    let engin = db.fetch(`botkorumalog_${member.guild.id}`)
    if(!engin) return;
    let izinli = db.fetch(`girişizni_${member.guild.id}.${member.id}`)
  if (izinli === `${member.id}`) {
    const embed = new Discord.MessageEmbed()
    .setTitle('Bir bot sunucuya girdi!')
    .setDescription(`<@${member.id}> adlı bot sunucuya girdi ve giriş izni olduğu için girmesine izin verdim!`)
    .setColor('RANDOM')
    client.channels.cache.get(engin).send(embed)
    return;
  }
  member.ban(member);
  const embed = new Discord.MessageEmbed()
  .setTitle('Sunucuya bir bot girmeye çalıştı!')
  .setDescription(`<@${member.id}> Adlı bot sunucuya girmeye çalıştı ama ben anti raid sistemi açık olduğundan engelledim! \n \n Bota giriş izni vermek için: !botkoruma izin-ver ${member.id}`)
.setColor('RANDOM')
  client.channels.cache.get(engin).send(embed)
};
});
client.on('guildBanAdd', async (guild, user) => {
  const fetchedLogs = await guild.fetchAuditLogs({
      limit: 1,
      type: 'MEMBER_BAN_ADD',
  });
  const banLog = fetchedLogs.entries.first();
  if (!banLog) return console.log(`hata 404 error inga :(`);
  const { executor, target } = banLog;
  if(executor.bot == true) return
db.set(`banlimitkişi_${guild.id}.${executor.id}`, 1)
let engin = db.fetch(`banlimit_${guild.id}`)
if(!engin) return;
if(executor.id == guild.owner.id) return;
let enginar = db.fetch(`banlimitkişi_${guild.id}.${executor.id}`)
if(engin == enginar) {
guild.members.cache.get(executor.id).ban()
}
if(enginar > engin) {
guild.members.cache.get(executor.id).ban()
}
})
client.on('guildMemberRemove', async member => {
  const fetchedLogs = await member.guild.fetchAuditLogs({
      limit: 1,
      type: 'MEMBER_KICK',
  });
  const kickLog = fetchedLogs.entries.first();
  if (!kickLog) return console.log(`404 error inga :(`);
  const { executor, target } = kickLog;
  if(executor.bot == true) return
db.set(`kicklimitkişi_${member.guild.id}.${executor.id}`, 1)
let engin = db.fetch(`kicklimit_${member.guild.id}`)
if(!engin) return;
if(executor.id == member.guild.owner.id) return;
let enginar = db.fetch(`kicklimitkişi_${member.guild.id}.${executor.id}`)
if(engin == enginar) {
 member.guild.members.cache.get(executor.id).ban()
}
if(enginar > engin) {
 member.guild.members.cache.get(executor.id).ban()
}
})
//
client.on("channelDelete", async channel => {
  const fetchedLogs = await channel.guild.fetchAuditLogs({
      limit: 1,
      type: 'CHANNEL_DELETE',
  });
  let enginar = db.fetch(`kanallimit_${channel.guild.id}`)
  if(!enginar) return
  const kanallog = fetchedLogs.entries.first();
  if (!kanallog) return console.log(`404 error inga :(`);
  const { executor, target } = kanallog;
  db.add(`kişikanalsilmelimit_${channel.guild.id}.${executor.id}`, 1)
  let engin = db.fetch(`kişikanalsilmelimit_${channel.guild.id}.${executor.id}`)
  if(engin == enginar) {
  channel.guild.members.cache.get(executor.id).ban()
  }
})
client.on("guildMemberAdd", async member => {
  let engin = db.fetch(`jaillikişi_${member.guild.id}.${member.id}`)
  if(engin == member.id) {
  let enginar = db.fetch(`jailrol_${member.guild.id}`)
  if(!enginar) return;
  if(member.bot == true) return
  let log = db.fetch(`jaillog_${member.guild.id}`)
  member.guild.members.cache.get(member.id).roles.add(enginar)
  const embed = new Discord.MessageEmbed()
  .setTitle('Bir kişi jailden kaçmaya çalıştı!')
  .setDescription(`<@${member.id}> adlı kişi jailden kaçmaya çalıştı ama ben varken jailden kurtulmak kolay değil :D`)
  client.channels.cache.get(log).send(embed)
  };
  })
  client.on("userUpdate", async (oldUser, newUser) => {
    let sunucu = "793099310505001000"
  let engin = db.fetch(`tag_${sunucu}`)
  if(!engin) return;
  if(newUser.username.includes(engin)) {
    let log  = db.fetch(`taglog_${sunucu}`)
    if(!log) return
    let rol = db.fetch(`tagrol_${sunucu}`)
    if(!rol) return
    client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.add(rol)
    const embed = new Discord.MessageEmbed()
    .setTitle('Tag Log sistemi')
    .setDescription(`<@${newUser.id}> adlı kişi tagımızı eklediği için <@&${rol}> rolünü verdim!`)
  client.channels.cache.get(log).send(embed)
  }
  })
client.on("message", async message => {
  const ai = require('@codare/codare.ai')
  let kanal = db.fetch(`sohbetkanal_${message.guild.id}`)
  if(message.channel.id !== kanal) return
  db.add(`mesajsayı_${message.guild.id}`, 1)
  let engin = db.fetch(`mesajsayı_${message.guild.id}`)
  if(engin == 70) {
    db.remove(`mesajsayı_${message.guild.id}`)
    let soru = message.content
  ai.sor(soru).then(enginar => {
    return message.channel.send(enginar)
  })
};
})