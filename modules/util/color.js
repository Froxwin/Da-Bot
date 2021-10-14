const { MessageEmbed } = require('discord.js')
const atom = require('..\\..\\functions')
const Button = require('../../Classes/button')

module.exports = new Button({
  name: 'color',
  /** @param {import('discord.js').ButtonInteraction} button */
  execute (button) {
    const eEmbed = new MessageEmbed()
      .setColor(atom.color())
      .setTitle(atom.color().toUpperCase())
    button.update({ embeds: [eEmbed] })
  }
})
