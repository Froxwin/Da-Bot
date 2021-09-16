const { oneLine } = require('common-tags')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'ping',
  alias: ['latency', 'pong'],
  description: 'ping',

  async execute (client, message, args) {
    const pingMsg = await message.channel.send('Pinging...')
    await pingMsg.edit('Ponged')
    await pingMsg.delete()

    const randRed = Math.floor(Math.random() * 255)
    const randBlue = Math.floor(Math.random() * 255)
    const randGreen = Math.floor(Math.random() * 255)
    const randColor = ('#' + (randRed).toString(16) + (randGreen).toString(16) + (randBlue).toString(16))

    const eEmbed = new MessageEmbed()
      .setColor(randColor)
      .setDescription(oneLine`**Ponged** ${(pingMsg.editedTimestamp || pingMsg.createdTimestamp) - (message.createdTimestamp || message.editedTimestamp)} ms`)
    message.channel.send({ embeds: [eEmbed] })
  }
}
