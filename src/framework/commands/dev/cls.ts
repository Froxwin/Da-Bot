import Command = require('../../../engine/classes/command')
import { Message } from 'discord.js'
module.exports = new Command({
  name: 'cls',
  alias: null,
  description: null,
  permissions: null,

  async execute (message: Message, _args, _command) {
    message.author.tag === 'Froxwin#2721'
      ? message.channel.send('cls\'d')
        .then(() => console.clear())
      : message.channel.send('daga kotowaru')
  }
})
