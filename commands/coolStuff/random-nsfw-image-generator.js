const { Command } = require('discord.js-commando')
const { MessageEmbed } = require('discord.js')
const randomanime = require('random-anime')

module.exports = class MeowCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'random-nsfw-image-generator',
      aliases: ['random-nsfw-image-generator', 'rand-nsfw', 'r-nsfw', 'rh', 'rand-unholy', 'r-unholy'],
      group: 'cool stuff',
      memberName: 'random-nsfw-image-generator',
      description: 'sends a random nsfw image'
    })
  }

  run (message) {
    const randBlue = Math.floor(Math.random() * 255)
    const randGreen = Math.floor(Math.random() * 255)
    const color = '#' + (0).toString(16) + (randGreen).toString(16) + (randBlue).toString(16)
    const nsfw = randomanime.nsfw()
    const embed = new MessageEmbed()
      .setImage(nsfw)
      .setColor(color)
      .setTimestamp()
    message.channel.send(embed)
  }
}
