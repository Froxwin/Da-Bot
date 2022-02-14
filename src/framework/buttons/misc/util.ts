import Button = require('../../../engine/classes/button')
import { ButtonInteraction, MessageEmbed } from 'discord.js'
import { color } from '../../../engine/functions'
import client = require('../../../engine/config/client')
import Command = require('../../../engine/classes/command')

export = new Button({
  name: 'util',
  execute (button: ButtonInteraction) {
    const arr: Command[] = []
    client.commands.forEach(cmd => {
      cmd.group === 'util' && arr.push(cmd)
    })

    let description = ''
    arr.forEach(cmd => {
      description +=
        '```\n' +
        `Name: ${cmd.name}\n` +
        `Aias: ${cmd.alias.toString()}\n` +
        `Description: ${cmd.description}\n` +
        `Permissions: ${cmd.permissions.toString()}\n` +
        '```'
    })

    button.update({
      components: [],
      embeds: [
        new MessageEmbed({
          title: '**Util**',
          color: `#${color()}`,
          description: description
        })
      ]
    })
  }
})
