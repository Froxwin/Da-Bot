const { MessageEmbed } = require('discord.js')
const atom = require('..\\functions')

module.exports =
  (client, prefix) => {
    client.on('messageCreate',
      async (message) => {
        atom.logger(message)
        atom.stuff(message)

        if (message.content.toLowerCase().startsWith(prefix)) {
          const [command, ...args] =
        message.content
          .toLowerCase().trim().substring(prefix.length).split(/\s+/)

          try {
            const exeCommand =
          client.commands.get(command) ||
          client.commands.find(
            temp => temp.alias && temp.alias.includes(command)
          )

            exeCommand.execute(client, message, args)
          } catch (error) {
            console.error(error)
            const eEmbed = new MessageEmbed()
              .setColor(atom.boundRandColor())
              .setTitle('Unknown Command')
              .setDescription(
            `**${command}** is not a valid command or needs maintanence`
              )
            message.channel.send({ embeds: [eEmbed] })
          }
        }
      }
    )
  }
