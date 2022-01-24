const { MessageEmbed } = require('discord.js')
const randomanime = require('random-anime')
const { color } = require('../../../engine/functions/index.js')

module.exports = {
  name: 'random-anime-character-generator',
  alias:
    [
      'random-anime-character-generator',
      'rand-anime', 'r-anime', 'ra'
    ],
  description: 'sends the image of a random anime character',

  execute (message, _args, _command) {
    const anime = randomanime.anime()
    const embed = new MessageEmbed()
      .setImage(anime)
      .setColor(`#${color()}`)
      .setTimestamp()
    message.channel.send({ embeds: [embed] })
  }
}
