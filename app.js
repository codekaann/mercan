
const { Client, Collection } = require("discord.js");
const client = new Client({
    intents: 33283 
});


const settings =  require("./config.js");


import("./handler.js");
global.client = client;


client.login(settings.bot.token)
    .catch(e => console.log("[BOT] Bota giriş yapılırken bir hata oluştu:\n" + e));


module.exports = settings;

client.on('messageCreate', msg => {
    if (msg.content.toLowerCase() === 'sa') {
      msg.channel.send('Aleyküm Selam, Hoş Geldin Adamım! :dolphin:');
    }
  });

  client.on('messageCreate', msg => {
    if (msg.content.toLowerCase() === '<@545651586559377410>') {
      msg.channel.send(':shrug: Uyuyodur o boşver sen onu, git talep oluştur. → <#1137470676693950635>');
    }
  });


  const { joinVoiceChannel } = require('@discordjs/voice');
  client.on('ready', () => { 
   joinVoiceChannel({
 channelId: "1137478341906141284",
 guildId: "1126439796223524885",       
 adapterCreator: client.guilds.cache.get("1126439796223524885").voiceAdapterCreator
     });
 });