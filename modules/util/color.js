const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'color',

  execute (button) {
    const randBlue = Math.floor(Math.random() * 255)
    const randGreen = Math.floor(Math.random() * 255)
    const randColor =
    ('#' + (0).toString(16) + (randGreen).toString(16) + (randBlue).toString(16))
    const eEmbed = new MessageEmbed()
      .setColor(randColor.toUpperCase())
      .setTitle(randColor.toUpperCase())

    button.update({ embeds: [eEmbed] })
  }
}
