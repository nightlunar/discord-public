const discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json");
exports.run = async(client, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')
    var prefix = "!"
    if(!args[0]) return message.channel.send(`Merhaba komutlar için lütfen ${prefix}botkoruma yardım yazınız!`)    
    if(args[0] == "aç") {
let engin = db.fetch(`botkorumalog_${message.guild.id}`) 
if(!engin) return message.channel.send(`Lütfen ilk olarak bot koruma log ayarlayınız!  \n ayarlamak için: ${prefix}botkoruma log \n Bot koruma menüsü için: ${prefix}botkoruma yardım`)
db.set(`botkoruma_${message.guild.id}`, 'aktif')
const embed2 = new discord.MessageEmbed()
.setDescription(`<@${message.author.id}> tarafından bot koruma açıldı!`)
.setColor('GREEN')
client.channels.cache.get(engin).send(embed2)
const embed = new discord.MessageEmbed()
.setTitle('Bot koruma açıldı!')
.setDescription(`<@${message.author.id}> tarafından bot koruma sistemi açıldı!`)
.setColor('RANDOM')
return message.channel.send(embed)
    };
if(args[0] == "log") {
let enginar = message.mentions.channels.first()
if(!enginar) return message.channel.send(`Merhaba lütfen bot koruma log kanalını belirtiniz! \n Yardım menüsü için: ${prefix}botkoruma yardım yazınız!`)
db.set(`botkorumalog_${message.guild.id}`, enginar.id)
const embed2 = new discord.MessageEmbed()
.setDescription(`Bu kanal başarı ile <@${message.author.id}> tarafından bot koruma log kanalı olarak ayarlandı! \n Bundan sonra önemli bi durum olduğunda burada bilgilendirmelerde bulacağım!`)
.setColor('RANDOM')
client.channels.cache.get(enginar.id).send(embed2)
const embed = new discord.MessageEmbed()
.setTitle('Başarı ile ayarlandı!')
.setDescription(`Bot koruma log kanalı <@${message.author.id}> tarafından <#${enginar.id}> olarak ayarlandı!`)
.setColor('RANDOM')
return message.channel.send(embed)
};
if(args[0] == "kapat") {
    let engin = db.fetch(`botkorumalog_${message.guild.id}`)
if(!engin) return message.channel.send('Sistem şu an zaten kapalı!')
let enginar = db.fetch(`botkorumalog_${message.guild.id}`)
const embed = new discord.MessageEmbed()
.setTitle('Bot koruma sistemi kapatıldı!')
.setDescription(`Bot koruma sistemi sunucunuzda <@${message.author.id}> tarafından sunucunuzda kapatılmıştır!`)
.setColor('RANDOM')
client.channels.cache.get(enginar).send(embed)
db.delete(`botkoruma_${message.guild.id}`)
db.delete(`botkorumalog_${message.guild.id}`)
db.delete()
return message.channel.send('Bot koruma sistemi sunucunuzda başarı ile kapatılmıştır!')
};
if(args[0] == "izin-ver") {
    let engin = args[1]
    if(!engin) return message.channel.send('Lütfen giriş izni vermek istediğiniz botun idini belirtin!')
    db.set(`girişizni_${message.guild.id}.${engin}`, engin)
    let log = db.fetch(`botkorumalog_${message.guild.id}`)
    const embed = new discord.MessageEmbed()
    .setTitle('Bir bota giriş izni verildi!')
    .setDescription(`<@${message.author.id}> <@${engin}> adlı bota giriş izni verdi! \n \n __**Bot bilgileri**__ \n Botun idi: ${engin} \n Botun yetkili davet linki: [tıkla](https://discordapp.com/oauth2/authorize?client_id=${engin}&scope=bot&permissions=8) \n Botun yetkisiz davet linki: [tıkla](https://discordapp.com/oauth2/authorize?client_id=${engin}&scope=bot&permissions=0)`)
    message.guild.channels.cache.get(log).send(embed)
    const embed2 = new discord.MessageEmbed()
    .setDescription(`<@${engin}> adlı bota başarı ile giriş izni verdiniz! \n \n Botun yetkili davet linki: [tıkla](https://discordapp.com/oauth2/authorize?client_id=${engin}&scope=bot&permissions=8) \n Botun yetkisiz davet linki: [tıkla](https://discordapp.com/oauth2/authorize?client_id=${engin}&scope=bot&permissions=0)`)
    .setColor('RANDOM')
    return message.channel.send(embed2)
    };
    if(args[0] == "giriş-izni-kaldır") {
    let engin = args[1]
    if(!engin) return message.channel.send('Lütfen giriş iznini kaldırmak istediğiniz botun idini belirtin!')
let enginar = db.fetch(`girişizni_${message.guild.id}.${engin}`)
if(!enginar) return message.channel.send('Bu botun zaten giriş izni yok!')
let enginn = db.fetch(`botkorumalog_${message.guild.id}`)
db.delete(`girişizni_${message.guild.id}.${engin}`)
const embed = new discord.MessageEmbed()
.setTitle('Bir botun giriş izni kaldırıldı!')
.setDescription(`<@${message.author.id}> <@${engin}> adlı botun sunucuya giriş iznini kaldırdı!`)
.setColor('RANDOM')
client.channels.cache.get(enginn).send(embed)
return message.channel.send(`<@${engin}> adlı botun başarı ile giriş iznini kaldırdınız!`)
};
if(args[0] == "kara-liste-ekle") {
    let enginn = db.fetch(`botkorumalog_${message.guild.id}`)
    let engin =  message.mentions.users.first()
if(!engin) return message.channel.send('Lütfen kara listeye almak istediğiniz kişiyi etiketleyin!')
db.set(`karaliste_${message.guild.id}.${engin.id}`, engin.id)
const embed = new discord.MessageEmbed()
.setTitle('Bir kullanıcı kara listeye alındı!')
.setDescription(`<@${message.author.id}> tarafından <@${engin.id}> adlı kullanıcı kara listeye alındı!`)
.setColor('RANDOM')
client.channels.cache.get(enginn).send(embed)
return message.channel.send('Kullanıcı başarı ile kara listeye eklendi!')
};
if(args[0] == "kara-liste-kaldır") {
    let enginn = db.fetch(`botkorumalog_${message.guild.id}`)
let engin = message.mentions.users.first()
if(!engin) return message.channel.send('Lütfen kara listeden çıkarmak istediğiniz kişiyi etiketleyin!')
let enginar = db.fetch(`karaliste_${message.guild.id}.${engin.id}`)
if(!enginar) return message.channel.send('Kullanıcı kara listede olmadığından kara listeden çıkaramam!')
db.delete(`karaliste_${message.guild.id}.${engin.id}`)
const embed = new discord.MessageEmbed()
.setTitle('Bir kullanıcı kara listeden çıkartıldı!')
.setDescription(`<@${message.author.id}> <@${engin.id}> adlı kişiyi beyaz kara çıkardı!`)
.setColor('RANDOM')
client.channels.cache.get(enginn).send(embed)
return message.channel.send('Kullanıcıyı başarı ile kara listeden çıkardım!')
};
};
exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [],
permLevel: 0,
karaliste: true
};
exports.help = {
    name : "botkoruma"
    };
