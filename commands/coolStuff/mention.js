const { Command } = require('discord.js-commando')

module.exports = class MeowCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'mention',
      group: 'cool stuff',
      memberName: 'mention',
      description: 'pings the message author'
    })
  }

  run (message) {
    message.channel.send(`<@!${message.author.id}>`)
  }
}
