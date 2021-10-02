const { MessageEmbed } = require('discord.js')
const atom = require('..\\..\\functions')
const Command = require('../../Classes/command')

module.exports = new Command({
  name: 'avatar',
  alias: ['pfp'],
  description: null,
  group: 'util',
  permissions: null,
  /**
   * @param {import('discord.js').Message} message
   * @param {string | any[]} args
   * @param {string} command
   */
  execute (message, args, command) {
    const user =
      (args.length === 0)
        ? message.author
        : message.mentions.users.first()
    const eEmbed = new MessageEmbed()
    // @ts-ignore
      .setColor(atom.color())
      .setImage(user.displayAvatarURL({ size: 4096, dynamic: true }))
      .setTitle(user.tag)
    message.channel.send({ embeds: [eEmbed] })
  }
})
