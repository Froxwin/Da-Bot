import Button = require('../../../engine/classes/button')
import { MessageEmbed } from 'discord.js'
import { color } from '../../../engine/functions/index.js'
import { ButtonInteraction } from 'discord.js'

export = new Button({
  name: 'color',
  execute (button: ButtonInteraction) {
    const eEmbed = new MessageEmbed()
      .setColor(`#${color()}`)
      .setTitle(color().toUpperCase())
    button.update({ embeds: [eEmbed] })
  }
})
