const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setPresence({
        game: { 
            name: 'test',
            type: 'WATCHING'
        },
        status: 'dnd'
    })
});

client.on('message', message => {
    if (message.content === 'Кто ты?') {
    	message.reply('Я бот');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
