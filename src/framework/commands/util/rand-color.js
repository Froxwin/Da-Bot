const { MessageActionRow, MessageButton, MessageEmbed } =
  require('discord.js')
const { color } = require('../../../engine/functions/index.js')

module.exports = {
  name: 'rand-color',
  alias: ['rc', 'color'],
  description: 'rand-color in all its glory',
  async execute (message, _args, _command) {
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('color')
          .setLabel('again?')
          .setStyle('PRIMARY')
      )

    const eEmbed = new MessageEmbed()
      .setColor(`#${color()}`)
      .setTitle(color().toUpperCase())

    await message.channel.send({ embeds: [eEmbed], components: [row] })
  }
}
