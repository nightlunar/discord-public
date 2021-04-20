const { hangman } = require('reconlx')
const db = require('quick.db')


exports.run = async (client, message, args) => {

    let kontrol = await db.fetch(`dil_${message.guild.id}`);
    if (kontrol == "tr") {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Bu komutu kullanmak için gerekli yetkiye sahip değilsin.')
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if(!channel) return message.channel.send('Lütfen bu oyunun oynanacağı bir kanal belirleyin')
        const word = args.slice(1).join(" ")
        if(!word) return  message.channel.send('Lütfen tahmin edilecek bir kelime yazınız.')

        const hang = new hangman({ 
            message: message,
            word: word,
            client: client,
            channelID: channel.id,
        })

        hang.start(); //Credits: PSwgNuHNpM
    } else {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You need manage messages permission.')
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if(!channel) return message.channel.send('Please specify a channel')
        const word = args.slice(1).join(" ")
        if(!word) return  message.channel.send('Please specify a word to guess.')

        const hang = new hangman({ 
            message: message,
            word: word,
            client: client,
            channelID: channel.id,
        })

        hang.start(); //Credits: PSwgNuHNpM
    }

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hangman', 'hang-man', 'adam-asmaca', 'adamasmaca', 'adam asmaca'],
    permLevel: 0
  };
  
  exports.help = {
    name: "hangman",
    description: "Afk Olmanızı Sağlar.",
    usage: "afk / afk "
  };
  