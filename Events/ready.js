const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("online");
  var oyun = [
    "Exay-Esports | 70k kullanıcı",
    "-yardım | -tavsiye | - bug-bildir",
    "-davet sana yardımcı olmak için hazırım!",
    "Exay-Esports 🎉"

  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 0) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 7000);
};