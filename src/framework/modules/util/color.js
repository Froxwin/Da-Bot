const Button = require('../../../engine/classes/button')
const { MessageEmbed } = require('discord.js')
const { color } = require('../../../engine/functions/index.js')

module.exports = new Button({
  name: 'color',
  /** @param {import('discord.js').ButtonInteraction} button */
  execute (button) {
    const eEmbed = new MessageEmbed()
      .setColor(`#${color()}`)
      .setTitle(color().toUpperCase())
    button.update({ embeds: [eEmbed] })
  }
})
