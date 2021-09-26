const
  {
    MessageActionRow,
    MessageButton,
    MessageEmbed
  } = require('discord.js')

const atom = require('..\\..\\functions')

module.exports = {
  name: 'rand-color',
  alias: ['rc', 'color'],
  description: 'rand-color in all its glory',
  async execute (message, args, command) {
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('color')
          .setLabel('again?')
          .setStyle('PRIMARY')
      )

    const eEmbed = new MessageEmbed()
      .setColor(atom.color().toUpperCase())
      .setTitle(atom.color().toUpperCase())

    await message.channel.send({ embeds: [eEmbed], components: [row] })
  }
}
