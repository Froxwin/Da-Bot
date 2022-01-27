const { MessageEmbed } = require('discord.js')
const randomanime = require('random-anime')
const Command = require('../../../engine/classes/command')
const { color } = require('../../../engine/functions/index')

module.exports = new Command({
  name: 'random-nsfw-image-generator',
  alias: [
    'random-nsfw-image-generator', 'rand-nsfw',
    'r-nsfw', 'rh', 'rand-unholy', 'r-unholy'
  ],
  permissions: null,
  group: 'util',
  description: 'sends a random nsfw image',

  execute (message, _args, _command) {
    const nsfw = randomanime.nsfw()
    const embed = new MessageEmbed()
      .setImage(nsfw)
      .setColor(`#${color()}`)
      .setTimestamp()
    message.channel.send({ embeds: [embed] })
  }
})
