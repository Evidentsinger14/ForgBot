const { Message, MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) =>{

    if(message.author.id !== '412070526081695744'){
        console.log(message.author.id + " Tried to restart. Don't worry, i didn't allow them.");
        message.reply("Sorry boss... no can do. Please contact Evident to do this.");
    } else {
        const embed = new MessageEmbed()
            .setColor("DARK_RED")
            .setDescription(`Restarting...`);
        message.channel.send({ embeds: [embed]});
        process.exit();
    }

}
