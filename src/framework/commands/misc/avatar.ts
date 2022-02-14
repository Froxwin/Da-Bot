import { color } from '../../../engine/functions/index.js'
import Command = require('../../../engine/classes/command')
import { Message, MessageEmbed } from 'discord.js'

const avatar = new Command({
  name: 'avatar',
  alias: ['pfp', 'profile'],
  description: 'Sends the user avatar',
  permissions: null,
  execute (message: Message, args: string[], _command) {
    const user =
      !args.length
        ? message.author
        : message.mentions.users.first()
    message.channel.send({
      embeds: [
        new MessageEmbed()
          .setColor(`#${color()}`)
          .setTitle(user!.tag)
          .setImage(
            user!.displayAvatarURL({
              size: 4096, dynamic: true, format: 'png'
            })
          )
      ]
    })
  }
})

module.exports = avatar
