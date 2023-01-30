const { client } = require("../index.js");
const https = require('https');
const domain = process.env.PUSH_URL

client.on("ready", async () => {

    setInterval(function() {
        https.get(`${domain}`, (response) =>{
            // Don't really need to do anything, just want to make sure that this will actually keep an uptime.
        });
    }, 6 * 10000);
    console.log("Bot Ready...")

})
