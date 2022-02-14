import { Message } from 'discord.js'
import { join } from 'path'
import Command = require('../../../engine/classes/command')

const sourceCode = new Command({
  name: 'source-code',
  alias: ['src-code', 'sc'],
  description: 'shows my insides',
  permissions: null,

  async execute (message: Message, _args, _command) {
    await message.channel.send(
      'So you want to see me naked' +
      '<:bot:849669570604171295>'
    )
    message.channel.send({
      files: [{ attachment: join(__dirname, '../../../index.js') }]
    })
  }
})

export = sourceCode
