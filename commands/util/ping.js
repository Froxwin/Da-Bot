const { oneLine } = require('common-tags')
const { MessageEmbed } = require('discord.js')
const { color } = require('../../functions/index.js')

module.exports = {
  name: 'ping',
  alias: ['latency', 'pong'],
  description: 'ping',

  async execute (message, args, command) {
    const pingMsg = await message.channel.send('Pinging...')
    await pingMsg.edit('Ponged')
    await pingMsg.delete()
    const eEmbed = new MessageEmbed()
      .setColor(color())
      .setDescription(
        oneLine`Ponged
        **${
          (pingMsg.createdTimestamp || pingMsg.editedTimestamp) -
          (message.createdTimestamp || message.editedTimestamp)
        } ms**`
      )
    message.channel.send({ embeds: [eEmbed] })
  }
}
