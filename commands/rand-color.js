const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js')

module.exports = {
  name: 'rand-color',
  description: 'hmm',
  async execute (client, message, args) {
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('color')
          .setLabel('again?')
          .setStyle('PRIMARY')
      )

    const randRed = Math.floor(Math.random() * 255)
    const randBlue = Math.floor(Math.random() * 255)
    const randGreen = Math.floor(Math.random() * 255)
    const randColor = ('#' + (randRed).toString(16) + (randGreen).toString(16) + (randBlue).toString(16))

    const eEmbed = new MessageEmbed()
      .setColor(randColor.toUpperCase())
      .setTitle(randColor.toUpperCase())

    await message.channel.send({ embeds: [eEmbed], components: [row] })
  }
}
