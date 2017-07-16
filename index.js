const Discord = require("discord.js");
const YTDL = require("ytdl-core");

const TOKEN = "MzMyOTY0MDY3MzEwMzA1Mjgw.DEFxTA.64P2LEpl-TS04FBKlJV0sPR65u8";
const PREFIX = "!ki."



var bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
    console.log("Ready");
});

bot.on('guildMemberAdd', member => {
  
  member.guild.defaultChannel.send(`Bem vindo ao canal :3, ${member}!`);
  
  const channel = member.guild.channels.find('name', 'member-log');
 
  if (!channel) return;
  
  channel.send(`Bem vindo ao canal :3, ${member}`);
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "batata") {
        message.channel.sendMessage("é um tuberculo :3");
    }
   
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "sua mãe") {
        message.channel.sendMessage("aquela prostibula >:3");
    }
   
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "kiranne oque vc acha do breno?") {
        message.channel.sendMessage("Ele é o nosso sabio monge das montanhas :3");
    }
   
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Kiranne oque vc acha do dino?") {
        message.channel.sendMessage("Ele é uma pessoa muito bipolar :3");
    }
   
});

bot.on('message', message => {
  
  if (message.content === 'Kiranne qual é o meu avatar?') {
    
    message.reply(message.author.avatarURL);
  }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Kiranne oque vc acha do dog?") {
        message.channel.sendMessage("Ele é um cão zueiro que gosta muito da letra K :3");
    }
   
   if (!message.content.startsWith(PREFIX)) return;

   var args = message.content.substring(PREFIX.length).split(" ");

   switch (args[0]) {
       case "ping":
            message.channel.sendMessage("pong");
            break;
       case "bird":
            message.channel.sendMessage("O todo poderoso THE BOSS não irrite ele ou você vai acaba levando mute ou kick");
            break; 
       case "TES":
            message.channel.sendMessage("PRAISE THE SUN", {
                file: "https://i.ytimg.com/vi/rme_vKykuNI/maxresdefault.jpg"
            });

            break;
        case "breno":
            message.channel.sendMessage("Ele é o nosso sabio monge das montanhas :3");
            break;
        case "avatar":
             message.reply(message.author.avatarURL);
             break;    

             
        default:
            message.channel.sendMessage("Comando invalido :c")       
   }

         



});



bot.login(TOKEN);