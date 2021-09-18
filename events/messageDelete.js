const { MessageEmbed } = require('discord.js')
const atom = require('..\\functions')

module.exports =
  (client) => {
    client.on('messageDelete', async (message) => {
      if (message.author.bot) return
      if (message.content.startsWith('=say') ||
            message.content.startsWith('.say')) return
      const eEmbed = new MessageEmbed()
        .setColor(atom.boundRandColor.misc())
        .setTitle('Yout cant hide from god')
        .setDescription(
            `**__${message.author.tag}:__** ${message.content}`
        )
      message.channel.send({ embeds: [eEmbed] })
    })
  }
