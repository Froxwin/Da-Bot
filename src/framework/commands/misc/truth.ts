import { Message } from 'discord.js'
import Command = require('../../../engine/classes/command')

const truth = new Command({
  name: 'truth',
  alias: ['8ball', 'roll'],
  description: 'Magic 8 Ball',
  permissions: null,

  execute (message: Message, args: string, _command) {
    const ア = ['Yes', 'No', 'Perhaps']
    args.length
      ? message.channel.send(ア[Math.floor(Math.random() * ア.length)])
      : message.channel.send('Provide Arguments')
  }
})

export = truth
