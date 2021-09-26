const { MessageEmbed } = require('discord.js')
const atom = require('..\\..\\functions')
const Button = require('../../Classes/button')

module.exports = new Button({
  name: 'color',
  execute (button) {
    const eEmbed = new MessageEmbed()
      .setColor(atom.color().toUpperCase())
      .setTitle(atom.color().toUpperCase())

    button.update({ embeds: [eEmbed] })
  }
})
