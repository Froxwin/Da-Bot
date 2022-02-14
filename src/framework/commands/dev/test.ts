import Command = require('../../../engine/classes/command')
import { Message } from 'discord.js'

const test = new Command({
  name: 'test',
  permissions: null,
  alias: null,
  description: 'Test Command',
  execute (message: Message, _args, _command) {
    message.channel.send('get nae nae\'d')
    console.log(
      '\x1b[38;2;0;255;0m' + 'Test Passed' + '\x1b[0m'
    )
  }
})

export = test
