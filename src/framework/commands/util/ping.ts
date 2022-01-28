import Command = require('../../../engine/base/classes/command')
import { oneLine } from 'common-tags'
import { Message } from 'discord.js'
import { color } from '../../../engine/functions/index.js'

const ping = new Command({
  name: 'ping',
  permissions: null,
  group: 'util',
  alias: ['latency', 'pong'],
  description: 'ping',

  async execute (message: Message, _args, _command) {
    const pingMsg = await message.channel.send('Pinging...')
    await pingMsg.edit('Ponged')
    await pingMsg.delete()
    message.channel.send({
      embeds: [{
        color: `#${color()}`,
        description: oneLine`Ponged
      **${
        (pingMsg.createdTimestamp ||
          pingMsg.editedTimestamp)! -
        (message.createdTimestamp ||
          message.editedTimestamp)!
      } ms**`
      }]
    })
  }
})

export = ping
