const { Client, Collection } = require('discord.js')

const prefix = '='
const folders = ['admin', 'misc', 'test', 'util']
const buttonFolders = ['admin', 'misc', 'test', 'util']
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
module.exports = {
  prefix,
  folders,
  buttonFolders,
  client
}
