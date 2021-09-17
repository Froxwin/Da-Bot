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
  async execute (client, message, args) {
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('color')
          .setLabel('again?')
          .setStyle('PRIMARY')
      )

    const eEmbed = new MessageEmbed()
      .setColor(atom.color.execute().toUpperCase())
      .setTitle(atom.color.execute().toUpperCase())

    await message.channel.send({ embeds: [eEmbed], components: [row] })
  }
}
