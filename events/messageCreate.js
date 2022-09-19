const { client } = require("../index.js");
const { MessageEmbed } = require("discord.js")

client.on("messageCreate", async message => {
    const prefix = process.env.PREFIX;
    if(message.content.toLowerCase().includes("forg")){
        await message.react("811558455721590808")
    }

    //Pingn't
    if(message.type === "REPLY" && message.mentions.members.first() === null){
        await message.react("797601839717023744")
    }

    if(message.mentions.members.first() != null && !message.author.bot){
        await message.react("800423202266021899")
    }

    if(message.author.bot || !message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    // Command Handler

    try {
        delete require.cache[require.resolve(`../commands/${cmd}.js`)];
        const command_file = require(`../commands/${cmd}.js`);
        command_file.run(client, message, args);
    } catch (error){

    }
})
