const { Message, MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) =>{

    if(message.author.id !== '412070526081695744' || message.author.id !== '417763128604884994'){
        message.reply("Sorry boss... no can do. Please contact Divine or Evident to do this.");
        await message.react('x');
    }


    const embed = new MessageEmbed()
        .setColor("DARK_RED")
        .setDescription(`Restarting...`);

    message.channel.send({ embeds: [embed]});
    return process.exit();

}
