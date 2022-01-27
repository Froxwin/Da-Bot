import { Message, MessageEmbed } from 'discord.js'
import randomanime = require('random-anime')
import Command = require('../../../engine/classes/command')
import { color } from '../../../engine/functions/index'

const randNSFW = new Command({
  name: 'random-nsfw-image-generator',
  alias: [
    'random-nsfw-image-generator', 'rand-nsfw',
    'r-nsfw', 'rh', 'rand-unholy', 'r-unholy'
  ],
  permissions: null,
  group: 'util',
  description: 'sends a random nsfw image',

  async execute (message: Message, _args, _command) {
    const nsfw = randomanime.nsfw()
    const embed = new MessageEmbed()
      .setImage(nsfw)
      .setColor(`#${color()}`)
      .setTimestamp()
    message.channel.send({ embeds: [embed] })
  }
})

export = randNSFW
