const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setPresence({ game: { name: 'казино бл[!]ть', type: 0 } });
});

client.on("message", (message) => {
if(message.content == "k.help"){
		message.channel.send("> k.ping - Проверка\n> -------------------------------\n> Создатель бота <@579336126133829645>");
	}
if(message.content == "k.ping"){
		message.channel.send("> 🐾");
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
