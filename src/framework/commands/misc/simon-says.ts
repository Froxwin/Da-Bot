import { Message as msg } from 'discord.js'
import cmd = require('../../../engine/classes/command')

const simonSays = new cmd({
  name: 'simon-says',
  alias: ['say'],
  description: 'says what you want me to say',
  group: 'misc',
  permissions: null,

  async execute (message: msg, args: string[], command: cmd) {
    if (message.channel.type === 'DM') {
      message.channel.send(
        'That command is unavailable in a DM channel'
      )
      return
    }
    if (!args.length) {
      message.channel.send('Provide arguments')
      return
    }
    await message.delete()
    message.channel.send(
      require('../../../engine/functions/contentFetcher')(
        message, command
      )
    )
  }
})

export = simonSays
