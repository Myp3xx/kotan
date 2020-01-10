const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("message", (message) => {
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if(command === "admin.say") {
     const sayMessage = args.join(" ");
     message.delete().catch(O_o=>{});  
     message.channel.send(sayMessage);
        }
if(command === "admin.setstatus online") {
     message.delete().catch(O_o=>{});  
     client.user.setStatus('online');
        }
if(command === "admin.setstatus idle") {
     message.delete().catch(O_o=>{});  
     client.user.setStatus('idle');
        }
if(command === "admin.setstatus dnd") {
     message.delete().catch(O_o=>{});  
     client.user.setStatus('dnd');
        }
if(command === "admin.setstatus invisible") {
     message.delete().catch(O_o=>{});  
     client.user.setStatus('invisible');
        }
if(command === "admin.setgame") {
     const sayMessage = args.join(" ");
     message.delete().catch(O_o=>{});  
     client.user.setPresence({ game: { name: sayMessage, type: 0 } });
        }
if(command === "admin.setlisten") {
     const sayMessage = args.join(" ");
     message.delete().catch(O_o=>{});  
     client.user.setPresence({ game: { name: sayMessage, type: 2 } });
        }
if(command === "admin.setwatch") {
     const sayMessage = args.join(" ");
     message.delete().catch(O_o=>{});  
     client.user.setPresence({ game: { name: sayMessage, type: 3 } });
        }
if(command === "help") {
		message.channel.send("> k.ping - Проверка\n> k.serv - Наш сервер\n> k.mc - Халявная лицензия Minecraft\n *Бот в разработке*");
	}
if(command === "ping") {
		message.channel.send("> 🐾");
	}
if(command === "serv") {
		message.author.send("https://discord.gg/qS7nza3");
	}
if(command === "mc") {
		message.author.send("> Держи свой аккаунт:\n> ``braxtonian97@gmail.com:bmbbgk06``\n> (логин:пароль)\n> **Хочешь еще лицензию? Тогда тебе сюда - https://discord.gg/hMVQxwv **");
	}
if(command === "ball") {
                var facts = ["Да", "Нет", "Не знаю", "Думаю, что нет", "Может быть да"];
                var fact = Math.floor(Math.random() * facts.length);
                message.channel.send("> ${message.author}, \n> " + facts[fact]);
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
