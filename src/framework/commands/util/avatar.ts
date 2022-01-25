import { color } from '../../../engine/functions/index.js'
import Command = require('../../../engine/classes/command')
import { Message, MessageEmbedImage } from 'discord.js'

const avatar = new Command({
  name: 'avatar',
  alias: ['pfp'],
  description: 'Sends the user avatar',
  group: 'util',
  permissions: null,
  execute (message: Message, args: string[], _command) {
    const user =
      !args.length
        ? message.author
        : message.mentions.users.first()
    const image = user!.displayAvatarURL({
      size: 4096, dynamic: true, format: 'png'
    })
    const eImage: MessageEmbedImage =
      image as MessageEmbedImage
    message.channel.send({
      embeds: [{
        color: `#${color()}`,
        image: eImage,
        title: user!.tag
      }]
    })
  }
})

module.exports = avatar
