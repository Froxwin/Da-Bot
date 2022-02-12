import SOFTandWET = require('../classes/SOFTandWET')

const client = new SOFTandWET({
  BaseClient: {
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
  },
  prefix: '='
})

export = client
