const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setPresence({ game: { name: 'казино бл@ть', type: 0 } });
});

client.on('message', message => {
    if (message.content === 'k.info') {
    	message.reply('Бот в разработке');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
