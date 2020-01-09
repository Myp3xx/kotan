const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setPresence({ game: { name: 'кошки-мышки', type: 0 } });
});

client.on("message", (message) => {
if(message.content == "k.help"){
		message.channel.send("> k.ping - Проверка\n> k.serv - Наш сервер\n> k.mc - Халявная лицензия Minecraft\n> *Бот в разработке*");
	}
if(message.content == "k.ping"){
		message.channel.send("> 🐾");
	}
if(message.content == "k.serv"){
		message.author.send("https://discord.gg/qS7nza3");
	}
if(message.content == "k.mc"){
		message.author.send("> Держи свой аккаунт:\n> ``braxtonian97@gmail.com:bmbbgk06``\n> (логин:пароль)\n> **Хочешь еще лицензию? Тогда тебе сюда - https://discord.gg/hMVQxwv**");
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
