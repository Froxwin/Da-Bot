import Button = require('../../../engine/classes/button')
import { MessageEmbed, ButtonInteraction } from 'discord.js'
import { color } from '../../../engine/functions/index.js'

export = new Button({
  name: 'color',
  execute (button: ButtonInteraction) {
    const eEmbed = new MessageEmbed()
      .setColor(`#${color()}`)
      .setTitle(color().toUpperCase())
    button.update({ embeds: [eEmbed] })
  }
})
