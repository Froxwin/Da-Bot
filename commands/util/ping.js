const { oneLine } = require('common-tags')
const { MessageEmbed } = require('discord.js')
const atom = require('..\\..\\functions')

module.exports = {
  name: 'ping',
  alias: ['latency', 'pong'],
  description: 'ping',

  async execute (client, message, args) {
    const pingMsg = await message.channel.send('Pinging...')
    await pingMsg.edit('Ponged')
    await pingMsg.delete()
    const eEmbed = new MessageEmbed()
      .setColor(atom.color())
      .setDescription(
        oneLine`Ponged
        **${(pingMsg.editedTimestamp || pingMsg.createdTimestamp) -
          (message.createdTimestamp || message.editedTimestamp)} ms**`
      )
    message.channel.send({ embeds: [eEmbed] })
  }
}
