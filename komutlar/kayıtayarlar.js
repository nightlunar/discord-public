const Discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json")
exports.run = async (client, message, args) => {
let logvar = db.fetch(`kayıtlog_${message.guild.id}`)
if(logvar == logvar) {var log = `<#` + logvar + `>`}
if(logvar == undefined) {var log = "ayarlanmamış"}
let alınacakvar = db.fetch(`kayıtalınacak_${message.guild.id}`)
if(alınacakvar == alınacakvar) {var alınacak = `<@&` + alınacakvar + `>`}
if(alınacakvar == undefined) {var alınacak = "ayarlanmamış"}
let kızvar = db.fetch(`kayıtkız_${message.guild.id}`)
if(kızvar == kızvar) {var kız = `<@&` + kızvar + `>`}
if(kızvar == undefined) {var kız = "ayarlanmamış"}
let erkekvar = db.fetch(`kayıterkek_${message.guild.id}`)
if(erkekvar == erkekvar) {var erkek = `<@&` + erkekvar + `>`}
if(erkekvar == undefined) {var erkek = "ayarlanmamış"}
let yetkilivar = db.fetch(`kayıtyetkili_${message.guild.id}`)
if(yetkilivar == yetkilivar) {var yetkili = `<@&` + yetkilivar + `>`}
if(yetkilivar == undefined) {var yetkili = "ayarlanmamış"}
let kanalvar = db.fetch(`kayıtkanal_${message.guild.id}`)
if(kanalvar == kanalvar) {var kanal = `<#` + kanalvar + `>`}
if(kanalvar == undefined) {var kanal = "ayarlanmamış"}
const embed = new Discord.MessageEmbed()
.setTitle(":gear:  "+ message.guild.name + " sunucusunun kayıt ayarları  :gear:")
.setDescription(`:orange_book:  Kayıt log: ${log} \n \n :blue_book:  Kayıt alınacak rol: ${alınacak} \n \n :green_book:  Kayıt erkek rol: ${erkek} \n \n :closed_book:  Kayıt kız rol: ${kız} \n \n:bookmark:  Kayıt yetkili rol: ${yetkili} \n \n :notebook_with_decorative_cover:  Kayıt kanal: ${kanal}`)
return message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'kayıt-ayarlar'
  };