const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    client.user.setPresence({ game: { name: `${client.guilds.size} серверов`, type: 3 } });
    client.user.setStatus('idle');
});

client.on("message", (message) => {
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if(command === "admin.saycmd") {
     const sayMessage = args.join(" ");
     message.delete().catch(O_o=>{});  
     message.channel.send(sayMessage);
        }

if (command === 'punch') {
	if (!args.length) {
		return message.channel.send(`${message.author}, Нехватает аргументов команды`);
	}
	message.channel.send({embed: {
  color: 3447003,
  description: `🤜 | ${message.author} **ударил(а)** ${args[0]}`}})
        }

if (command === 'valenok') {
	if (!args.length) {
		return message.channel.send(`${message.author}, Нехватает аргументов команды`);
	}
	message.channel.send({embed: {
  color: 3447003,
  description: `👟 | ${message.author} **кинул(а) валенок в** ${args[0]}`}})
        }

if (command === 'kill') {
	if (!args.length) {
		return message.channel.send(`${message.author}, Нехватает аргументов команды`);
	}
	message.channel.send({embed: {
  color: 3447003,
  description: `🔫 | ${message.author} **убил(а)** ${args[0]}`}})
        }

if (command === 'hug') {
	if (!args.length) {
		return message.channel.send(`${message.author}, Нехватает аргументов команды`);
	}
	message.channel.send({embed: {
  color: 3447003,
  description: `✨ | ${message.author} **обнял(а)** ${args[0]}`}})
        }

if (command === 'kiss') {
	if (!args.length) {
		return message.channel.send(`${message.author}, Нехватает аргументов команды`);
	}
	message.channel.send({embed: {
  color: 3447003,
  description: `💖 | ${message.author} **поцеловал(а)** ${args[0]}`}})
        }

if (command === 'vodka') {
	message.channel.send({embed: {
  color: 3447003,
  description: `🍾 | ${message.author} **ушёл(шла) в запой**`}})
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
