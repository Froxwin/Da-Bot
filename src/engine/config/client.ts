import { Collection } from 'discord.js'
import SOFTandWET = require('../classes/SOFTandWET')
import { readdirSync as fs } from 'fs'
const filter = a => fs(a).filter(f => f.endsWith('.js'))

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
  commands: new Collection(),
  buttons: new Collection(),
  prefix: '=',
  load: (dir, collec) =>
    fs(`${process.cwd()}\\out\\framework\\${dir}`)
      .forEach(folder =>
        filter(`${process.cwd()}\\out\\framework\\${dir}\\${folder}`)
          .forEach(file => collec.set(
            require(
              `${process.cwd()}\\out\\framework\\${dir}\\` +
              `${folder}\\${file}`
            ).name,
            require(
              `${process.cwd()}\\out\\framework\\${dir}\\` +
              `${folder}\\${file}`
            )
          )))
})

export = client
