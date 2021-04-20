const Discord = require('discord.js');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./database/db.json');
const db = low(adapter)
const moment = require('moment');

exports.run = async (client, message, args) => {
    try {
        let argSec = args[0];
        let argB = args[1];
        let arg = args.slice(2).join(" ").toString().trim();
        let ac = ["aç", "oluştur", "tut", "kaydet", "save", "add", "create", "take", "make", ""];
        let kapa = ["kapat", "sil", "delete", "del", "remove", "del", "delete", "unadd", "no"];
        let oren = ["bak", "look", "find", "ara", "nevar", "bul", "search", "i"];
        if (ac.includes(argSec)) {
            if (!arg) return send(new Discord.MessageEmbed().setDescription("incorrect"));
            if (db.get("not").find({author: message.author.id, not: arg}).value()) {
                send("exists")
            }
            db.get("not").push({author: message.author.id, not: arg, name: argB, zaman: `${moment(Date.now()).add("h", "3").locale("tr").format("DD:MM:YYYY | HH:MM:SS")}`}).write();
            send("saved/kaydedildi")
        }


        if (kapa.includes(argSec)) {
            
            if (!argB) return send("add a name")
            db.get("not").remove({author: message.author.id, name: argB}).write()
            send("del")
        }
        if (oren.includes(argSec)) {
            if (!db.get("not").find({author: message.author.id, name: argB}).value()) return send("no.")
            let veri = db.get("not").find({author: message.author.id, name: argB}).value()
            send(new Discord.MessageEmbed().addField("Note:", `> ${veri.not}`, true).addField("Time:", `> ${veri.zaman}`, true).setFooter(veri.name))
        }
    } catch (error) {
        message.channel.send(error, { code: "js" });
    };
    function send(yazi) {
        message.channel.send(yazi);
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['note', 'not-tut'],
    permLevel: 0,
};
 
exports.help = {
    name: 'not',
    description: 'not',
    usage: 'not'
};