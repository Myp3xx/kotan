const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Кто ты?') {
    	message.reply('Я бот');
  	}
});

bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'пиздец',
            type: "PLAYING",
        }
    });
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
