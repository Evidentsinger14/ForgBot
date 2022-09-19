const node = require('nodeactyl');
const Client = node.Client;
const { MessageEmbed } = require("discord.js");
const BOT_ADMINS = process.env.BOT_ADMINS.split(',');

Client.login(process.env.QUERY , process.env.API_KEY, (logged_in) => {
    if(logged_in === true){
        console.log(`Pomyślnie zalogowano do API`)
    } else {
        console.log(logged_in)
    }
})

module.exports.run = async (client, message, args) =>{
    const senderIsAuthorized = BOT_ADMINS.includes(message.member.id)


    if(!senderIsAuthorized){
        message.reply("Sorry boss... no can do. Please contact Evident to do this.");
    } else {
        const embed = new MessageEmbed()
            .setColor("DARK_RED")
            .setDescription(`Restarting...`);
        Client.restartServer(process.env.SUPPORT_ID).then(message.channel.send({ embeds: [embed]}));
    }
}
