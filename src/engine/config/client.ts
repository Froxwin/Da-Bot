import { Collection } from 'discord.js'
import { join as Ω } from 'path'
import SOFTandWET = require('../classes/SOFTandWET')
import { readdirSync as fs, readdir } from 'fs'
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
    fs(Ω(__dirname, `../../framework/${dir}`))
      .forEach(fol => {
        filter(
          Ω(__dirname, `../../framework/${dir}/${fol}`)
        ).forEach(file => collec.set(
          require(
            Ω(
              __dirname,
              `../../framework/${dir}/${fol}/${file}`
            )
          ).name,
          require(
            Ω(
              __dirname,
              `../../framework/${dir}/${fol}/${file}`
            )
          )
        ))
      }),
  loadAsync: (dir, collec) => {
    readdir(
      Ω(__dirname, `../../framework/${dir}`),
      (_err, folders) => {
        folders.forEach(fol => {
          readdir(
            Ω(__dirname, `../../framework/${dir}/${fol}`),
            (_err, files) => {
              files.filter(f => f.endsWith('.js'))
                .forEach(file => {
                  const a =
                    require(
                      Ω(
                        __dirname,
                        '../../framework/' +
                        `${dir}/${fol}/${file}`
                      )
                    )
                  collec.set(a.name, a)
                })
            })
        })
      })
  }
})

export = client
