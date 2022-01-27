import Command = require('../../../engine/classes/command')
import { color } from '../../../engine/functions/index'
import { Message, MessageActionRow, MessageButton } from
  'discord.js'

const randomEquation = new Command({
  name: 'random-equation',
  alias: ['rand-eq', 're'],
  permissions: null,
  group: 'util',
  description: 'sends a random equation',

  async execute (message: Message, _args, _command) {
    await message.channel.send({
      embeds: [{
        color: `#${color()}`,
        description: '**Choose degree of the equation**'
      }],
      components: [
        new MessageActionRow()
          .addComponents([
            new MessageButton({
              customId: 'quadratic',
              label: '2',
              style: 'PRIMARY'
            }),
            new MessageButton({
              customId: 'cubic',
              label: '3',
              style: 'PRIMARY'
            }),
            new MessageButton({
              customId: 'biquadratic',
              label: '4',
              style: 'PRIMARY'
            })
          ])
      ]
    })
  }
})

export = randomEquation
