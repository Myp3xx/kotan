const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("ready", () => {
    client.user.setPresence({
        game: { 
            name: 'PIZDEC',
            type: 'PLAYING'
        },
        status: 'idle'
    })
});

client.on('message', message => {
    if (message.content === 'Кто ты?') {
    	message.reply('Я бот');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
