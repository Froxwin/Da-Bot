import Command = require('../../../engine/classes/command')
import { exec } from 'child_process'
import { Message } from 'discord.js'
import contentFetcher = require('../../../engine/functions/contentFetcher')
module.exports = new Command({
  name: 'run',
  alias: null,
  description: null,
  permissions: null,

  async execute (message: Message, _args, command) {
    message.author.tag !== 'Froxwin#2721'
      ? message.channel.send('daga kotowaru')
      : exec(contentFetcher(message, command), (err, out, stderr) => {
        err && message.channel.send(err.message.toString())
        stderr && message.channel.send(stderr.toString())
        out && message.channel.send(out.toString())
      })
  }
})
