const Discord = require('discord.js')
const GameCord = require('gamecord-fork').djs
const db = require('quick.db')

 exports.run = async (client, message, args) => {
    let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "tr") {
    new GameCord.ConnectFour(message)
         .run()

} else {
    new GameCord.ConnectFour(message)
 // Always better to set max time because the default one is just 5s
    .run()  
}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['connectfour', 'connect-four', 'dördünü-birleştir', 'dordunubirlestir', 'dördünübirleştir', 'dordunu-birlestir'],
    permLevel: 0
  };
   
  exports.help = {
    name: "connect-four",
    description: "Bot i",
    usage: "istatistik"
  };