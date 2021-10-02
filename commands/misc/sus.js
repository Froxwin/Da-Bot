const { MessageEmbed } = require('discord.js')
const atom = require('..\\..\\functions')
const Command = require('../../Classes/command')

module.exports = new Command({
  name: 'sus',
  alias: ['sus'],
  description: 'idek',
  group: 'misc',
  permissions: null,

  /**
   * @param {import('discord.js').Message} message
   * @param {string | any[]} args
   * @param {string} command
   */
  execute (message, args, command) {
    if (!message.mentions.users.first()) {
      const eEmbed = new MessageEmbed()
        .setColor(atom.color())
        .setTitle('Failed')
        .setDescription('Mention a user')
      message.channel.send({ embeds: [eEmbed] })
    } else {
      const eEmbed = new MessageEmbed()
        .setColor(atom.color())
        .setTitle('SUS')
        .setDescription(
          `**${message.mentions.users.first()} IS KINDA SUS NGL**`
        )
      message.channel.send({ embeds: [eEmbed] })
    }
  }
})
