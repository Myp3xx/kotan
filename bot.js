const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd')
    client.user.setPresence({ game: { name: 'ванной с уточками', type: 0 }
});

client.on('message', message => {
    if (message.content === 'k.info') {
    	message.reply('ГЫГ');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
