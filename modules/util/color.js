const Button = require('../../classes/button')
const { MessageEmbed } = require('discord.js')
const { color } = require('../../functions/index.js')

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
