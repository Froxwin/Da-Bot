const { MessageEmbed } = require('discord.js')
const randomanime = require('random-anime')
const atom = require('..\\..\\functions')

module.exports = {
  name: 'random-anime-character-generator',
  alias: [
    'random-anime-character-generator',
    'rand-anime', 'r-anime', 'ra'
  ],
  description: 'sends the image of a random anime character',

  execute (client, message, args, command) {
    const anime = randomanime.anime()
    const embed = new MessageEmbed()
      .setImage(anime)
      .setColor(atom.color())
      .setTimestamp()
    message.channel.send({ embeds: [embed] })
  }
}
