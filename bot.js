const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    client.user.setPresence({ game: { name: `k.help | ${client.guilds.size} серверов`, type: 0 } });
    client.user.setStatus('idle');
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`Меня добавили на ${guild.name} (id: ${guild.id})`);
  client.user.setPresence({ game: { name: `k.help | ${client.guilds.size} серверов`, type: 0 } });
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`Меня удалили с ${guild.name} (id: ${guild.id})`);
  client.user.setPresence({ game: { name: `k.help | ${client.guilds.size} серверов`, type: 0 } });
});

client.on("message", (message) => {
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if(command === "admin.saycmd") {
     const sayMessage = args.join(" ");
     message.delete().catch(O_o=>{});  
     message.channel.send(sayMessage);
        }

if (command === 'help') {
	message.channel.send({embed: {
  color: 3447003,
  description: `__**Помощь по командам:**__\n\n**k.punch <упоминание>** - ударить\n**k.valenok <упоминание>** - кинуть валенок\n**k.kill <упоминание>** - убить\n**k.hug <упоминание>** - обнять\n**k.kiss <упоминание>** - поцеловать\n**k.vodka** - уйти в запой\n**k.suicide** - совершить самоубийство\n\n**k.nitro** - сгенерировать Discord Nitro\n**k.invite** - пригласить этого бота к себе на сервер\n`}})
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

if (command === 'suicide') {
	message.channel.send({embed: {
  color: 3447003,
  description: `🩸 | ${message.author} **самоубился(лась)**`}})
        }

if (command === 'admin.embedcmd') {
     const sayEmbed = args.join(" ");
        message.delete().catch(O_o=>{}); 
	message.channel.send({embed: {
  color: 0,
  description: sayEmbed}})
        }

if (command === 'invite') {
	message.author.send({embed: {
  color: 15844367,
  description: "https://discordapp.com/oauth2/authorize?client_id=664850581537685506&scope=bot&permissions=8"}})
	message.author.send("Загляни к нам на сервер :з\nhttps://discord.gg/hMVQxwv")
        }

if (command === 'nitro') {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var string_length = 16;
        var randomstring = '';
        for (var i=0; i<string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum,rnum+1);
        }
	message.author.send("https://discord.gift/" + randomstring)
	message.author.send({embed: {
  color: 15844367,
  description: `**Почему не работает?**\nМы рандомно генерируем 16 букв и цифр, столько символов содержится в подарочных кодах\nМожет произойти __чудо__, и бот сгенерирует рабочее Nitro`}})
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
