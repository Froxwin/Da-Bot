const { Collection } = require('discord.js')
const SOFTandWET = require('..\\Classes\\SOFTandWET')
const fs = require('fs').readdirSync
const filter = a => fs(a).filter(f => f.endsWith('.js'))
const client = new SOFTandWET(
  {
    BaseClient:
    {
      intents:
        [
          'DIRECT_MESSAGE_REACTIONS',
          'DIRECT_MESSAGE_TYPING',
          'DIRECT_MESSAGES',
          'GUILD_MESSAGE_TYPING',
          'GUILDS', 'GUILD_MESSAGES',
          'GUILD_BANS', 'GUILD_WEBHOOKS',
          'GUILD_EMOJIS_AND_STICKERS',
          'GUILD_MEMBERS'
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
    },
    commands: new Collection(),
    buttons: new Collection(),
    prefix: '=',
    load: (dir, collec) => fs(`${dir}`).forEach(folder =>
      filter(`${dir}\\${folder}`).forEach(file => collec.set(
        require(`${dir}\\${folder}\\${file}`).name,
        require(`${dir}\\${folder}\\${file}`)
      ))
    )
  }
)
module.exports = client
