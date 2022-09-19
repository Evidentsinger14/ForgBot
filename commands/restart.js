const { Message, MessageEmbed } = require("discord.js");
const BOT_ADMINS = process.env.BOT_ADMINS.split(',');

module.exports.run = async (client, message, args) =>{
    const senderIsAuthorized = BOT_ADMINS.includes(message.member.id)


    if(!senderIsAuthorized){
        message.reply("Sorry boss... no can do. Please contact Evident to do this.");
    } else {
        const embed = new MessageEmbed()
            .setColor("DARK_RED")
            .setDescription(`Restarting...`);
        message.channel.send({ embeds: [embed]}).then(process.exit);
    }

}
