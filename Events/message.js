const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const Database = require("plasma-db");
const db = new Database("./database.json"); 

module.exports = message => {
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
   }
  if (cmd) {
	if (cmd.conf.karaliste === true) {
		const Database = require("plasma-db");
		const db = new Database("./anti-raid.json");
				  let enginar = db.fetch(`karaliste_${message.guild.id}.${message.author.id}`)
				  if (!message.guild.owner.id.includes(message.author.id) && message.author.id == enginar) {
					const embed = new Discord.MessageEmbed()
								.setDescription(`:x: **${cmd.help.name}** isimli komutu kullanabilmek için sunucu sahibi olman ve ya kara listeden çıkartılman gerek!`)
								.setColor("RED")
							message.channel.send({embed})
							return
				  }
				}
    if (cmd.conf.permLevel === 1) {
			if (!message.member.hasPermission("MANAGE_MESSAGES")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`)
          .setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 2) {
			if (!message.member.hasPermission("KICK_MEMBERS")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
    if (cmd.conf.permLevel === 3) {
			if (!message.member.hasPermission("BAN_MEMBERS")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 4) {
			if (!message.member.hasPermission("ADMINISTRATOR")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
if (cmd.conf.permLevel === 6) {
			if (!message.member.hasPermission("MANAGE_CHANNELS")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **KANALLARI YÖNET** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 5) {
			if (!ayarlar.sahip.includes(message.author.id)) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu sadece **sahibim** kullanabilir!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};