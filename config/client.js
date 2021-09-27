const { Client, Collection } = require('discord.js')

class SOFT_AND_WET extends Client {
  constructor (options) {
    super(options)
    this.intents = options.intents
    this.partials = options.partials
    this.presence = options.presence

  }
}

const client = new Client(
  {
    intents:
    [
      'DIRECT_MESSAGE_REACTIONS', 'DIRECT_MESSAGE_TYPING',
      'DIRECT_MESSAGES', 'GUILD_MESSAGE_TYPING', 'GUILDS',
      'GUILD_MESSAGES', 'GUILD_BANS', 'GUILD_WEBHOOKS',
      'GUILD_EMOJIS_AND_STICKERS', 'GUILD_MEMBERS'
    ],
    partials:
    [
      'MESSAGE', 'CHANNEL', 'REACTION', 'REACTION', 'USER',
      'GUILD_MEMBER'
    ],
    presence:
    {
      status: 'idle',
      activities:
      [
        {
          name: 'ur mom',
          type: 'PLAYING'
        }
      ]
    }
  }
)
client.commands = new Collection()
client.buttons = new Collection()
module.exports = client
