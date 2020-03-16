const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    client.user.setPresence({ game: { name: `k.help | ${client.guilds.size}`, type: 0 } });
    client.user.setStatus('idle');
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`Меня добавили на ${guild.name} (id: ${guild.id})`);
  client.user.setPresence({ game: { name: `k.help | ${client.guilds.size}`, type: 0 } });
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`Меня удалили с ${guild.name} (id: ${guild.id})`);
  client.user.setPresence({ game: { name: `k.help | ${client.guilds.size}`, type: 0 } });
});

client.on("message", (message) => {
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if(command === "admin.saycmd1") {
     const sayMessage = args.join(" ");
     message.delete().catch(O_o=>{});  
     message.channel.send(sayMessage);
        }

if (command === 'help') {
const embed = new Discord.RichEmbed()
  .setTitle("Помощь по командам")
  .setColor(0x00AE86)
  .setDescription("**k.punch <@упоминание>** - ударить\n**k.valenok <@упоминание>** - кинуть валенок\n**k.taburet <@упоминание>** - ударить табуретом\n**k.kill <@упоминание>** - убить\n**k.hug <@упоминание>** - обнять\n**k.kiss <@упоминание>** - поцеловать\n**k.poke <@упоминание>** - тыкнуть\n**k.pat <@упоминание>** - погладить\n**k.lick <@упоминание>** - лизнуть\n**k.bite <@упоминание>** - укусить\n**k.vodka** - уйти в запой\n**k.suicide** - совершить самоубийство\n\n**k.nitro** - сгенерировать Discord Nitro\n**k.invite** - пригласить этого бота к себе на сервер")
  .setFooter("Разработчик - мурзuк#3585")
  message.channel.send({embed});
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

if (command === 'taburet') {
	if (!args.length) {
		return message.channel.send(`${message.author}, Нехватает аргументов команды`);
	}
	message.channel.send({embed: {
  color: 3447003,
  description: `🪑 | ${message.author} **ударил(а) табуретом по голове** ${args[0]}`}})
        }

if (command === 'kill') {
	if (!args.length) {
		return message.channel.send(`${message.author}, Нехватает аргументов команды`);
	}
	message.channel.send({embed: {
  color: 3447003,
  description: `🔪 | ${message.author} **убил(а)** ${args[0]}`}})
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

if (command === 'poke') {
	if (!args.length) {
		return message.channel.send(`${message.author}, Нехватает аргументов команды`);
	}
	message.channel.send({embed: {
  color: 3447003,
  description: `👉 | ${message.author} **тыкнул(а)** ${args[0]}`}})
        }

if (command === 'pat') {
	if (!args.length) {
		return message.channel.send(`${message.author}, Нехватает аргументов команды`);
	}
	message.channel.send({embed: {
  color: 3447003,
  description: `😺 | ${message.author} **погладил(а)** ${args[0]}`}})
        }

if (command === 'lick') {
	if (!args.length) {
		return message.channel.send(`${message.author}, Нехватает аргументов команды`);
	}
	message.channel.send({embed: {
  color: 3447003,
  description: `😛 | ${message.author} **лизнул(а)** ${args[0]}`}})
        }

if (command === 'bite') {
	if (!args.length) {
		return message.channel.send(`${message.author}, Нехватает аргументов команды`);
	}
	message.channel.send({embed: {
  color: 3447003,
  description: `🐺 | ${message.author} **укусил(а)** ${args[0]}`}})
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

if (command === 'embed') {
	if (!args.length) {
		return message.channel.send(`${message.author}, Нехватает аргументов команды`);
	}
  const embed = new Discord.RichEmbed()
  .setColor(${args[0]})
  .setDescription("${args[1]}")
  message.channel.send({embed});
        }

if (command === 'embedcmd1') {
const embed = new Discord.RichEmbed()
  .setTitle("This is your title, it can hold 256 characters")
  .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
  .setColor(0x00AE86)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
  .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail("http://i.imgur.com/p2qNFag.png")
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("This is a field title, it can hold 256 characters",
    "This is a field value, it can hold 1024 characters.")
  .addField("Inline Field", "They can also be inline.", true)
  .addBlankField(true)
  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);
  message.channel.send({embed});
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
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
