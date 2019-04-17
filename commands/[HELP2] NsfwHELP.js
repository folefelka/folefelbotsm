const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("**Oto Komendy kategorii: INFORMACJE**")
    .setURL(bicon)
    .setColor("#42b0f4")
    .setThumbnail("https://images-ext-2.discordapp.net/external/V20rFXxwRD_Zji0Kfm6S6OUW1yhO3CTiPkJIVg8mgP8/http/www.gimpuj.info/gallery/30301_01_04_10_7_21_26.gif")
    .addField("NSFW:", "```NULL```")
    message.channel.send(botembed);
}

module.exports.help = {
  name:"nsfw"
}