const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
  let memberInfo = message.mentions.members.first();

  if(!memberInfo){
    var userinf = new Discord.RichEmbed()
        .setTitle("**Informacje o Użytkowniku**")
        .setThumbnail(message.author.avatarURL)
        .setColor("#42b0f4")
        .addField("Nazwa Użytkownika:", `${message.author.username}#${message.author.discriminator}`)
        .addField("ID:", message.author.id)
        .addField("Dołaczył do discorda:", message.author.createdAt)

        message.channel.send(userinf);

  }else{

    var userinfoo = new Discord.RichEmbed()
        .setTitle("**Informacje o Użytkowniku**", `www.google.com`)
        .setThumbnail(memberInfo.user.avatarURL)
        .setColor("#42b0f4")
        .addField("Nazwa Użytkownika:", `${memberInfo.user.username}#${memberInfo.user.discriminator}`)
        .addField("ID:", memberInfo.id)
        .addField("Dołaczyl do DISCORDA:", memberInfo.user.createdAt)

        message.channel.send(userinfoo);
  }
}

module.exports.help = {
    name: "userinfo"
}