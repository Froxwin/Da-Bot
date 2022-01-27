import { Message as msg } from 'discord.js'
import cmd = require('../../../engine/classes/command')

const simonSays = new cmd({
  name: 'simon-says',
  alias: ['say'],
  description: 'says what you want me to say',
  group: 'misc',
  permissions: null,

  async execute (msg: msg, args: string[], cmd: cmd) {
    if (msg.channel.type === 'DM') {
      msg.channel.send(
        'That command is unavailable in a DM channel'
      )
      return
    }
    if (!args.length) {
      msg.channel.send('Provide arguments')
      return
    }
    await msg.delete()
    msg.channel.send(
      require('../../../engine/functions/contentFetcher')(
        msg, cmd
      )
    )
  }
})

export = simonSays
