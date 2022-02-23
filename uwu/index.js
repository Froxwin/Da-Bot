const { Client } = require('discord.js');
const SOFTundWET = new Client({
  intents: [
    'DIRECT_MESSAGE_REACTIONS',
    'DIRECT_MESSAGE_TYPING',
    'DIRECT_MESSAGES',
    'GUILD_MESSAGE_TYPING',
    'GUILDS',
    'GUILD_MESSAGES',
    'GUILD_BANS',
    'GUILD_WEBHOOKS',
    'GUILD_EMOJIS_AND_STICKERS',
    'GUILD_MEMBERS'
  ],
  partials: [
    'MESSAGE', 'CHANNEL', 'REACTION', 'REACTION',
    'USER', 'GUILD_MEMBER'
  ],
  presence: {
    status: 'idle',
    activities: [{ name: 'ur mom', type: 'PLAYING' }]
  }
});

SOFTundWET.on('ready', () => {
  console.log('yes');
});

SOFTundWET.on('messageCreate', async msg => {
  msg.channel.send(msg.content);
});

SOFTundWET.login('ODQzODk5ODE3MDI1MzM5NDMy.YKKk8w.MWvZl7SNClQciFssA6BpLbfWueE');
