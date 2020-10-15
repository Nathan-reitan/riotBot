const Discord = require('discord.js');
const config = require ('./config.json');
const client = new Discord.Client();


const helpEmbed = {
  title: "riotBot help desk",
  description: `
  1. !ritoplz: will put list of commands into chat;
 `
}

client.once('ready', ()=>{
  console.log('Hardstuck Wood IV')
});

client.login(config.token);
