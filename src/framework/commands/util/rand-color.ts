import Command = require('../../../engine/classes/command')
import { Message, MessageActionRow, MessageButton } from
  'discord.js'
import { color } from '../../../engine/functions/index.js'

const randColor = new Command({
  name: 'rand-color',
  alias: ['rc', 'color'],
  permissions: null,
  group: 'util',
  description: 'rand-color in all its glory',

  async execute (message: Message, _args, _command) {
    await message.channel.send({
      embeds: [{
        color: `#${color()}`,
        title: color.toUpperCase()
      }],
      components: [
        new MessageActionRow()
          .addComponents(
            new MessageButton({
              customId: 'color',
              label: 'again?',
              style: 'PRIMARY'
            })
          )
      ]
    })
  }
})

export = randColor
