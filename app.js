require('dotenv').config();

const { Client, Collection } = require("discord.js");
const client = new Client({
    intents: 33283 
});

const token = process.env.TOKEN;

const settings =  require("./config.js");


import("./handler.js");
global.client = client;


client.login(token)
    .catch(e => console.log("[BOT] Bota giriş yapılırken bir hata oluştu:\n" + e));


module.exports = settings;

client.on('messageCreate', msg => {
    if (msg.content.toLowerCase() === 'sa') {
      msg.channel.send('Aleyküm Selam, Hoş Geldin Adamım! :dolphin:');
    }
  });

  client.on('messageCreate', msg => {
    if (msg.content.toLowerCase() === '<@545651586559377410>') {
      msg.channel.send(':shrug: Meşgul olma ihtimali yüksek, gidip destek talebi açmayı dene. → <#1012629878597759017>');
    }
  });


  const { joinVoiceChannel } = require('@discordjs/voice');
  client.on('ready', () => { 
   joinVoiceChannel({
 channelId: "1491165081810108447",
 guildId: "984874881869029448",       
 adapterCreator: client.guilds.cache.get("984874881869029448").voiceAdapterCreator
     });
 });
