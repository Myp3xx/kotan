const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'пиздец',
            type: "STREAMING",
            url: "https://www.twitch.tv/monstercat"
        }
});

client.on('message', message => {
    if (message.content === 'Кто ты?') {
    	message.reply('Я бот');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
