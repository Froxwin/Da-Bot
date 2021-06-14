const { Command } = require('discord.js-commando')

module.exports = class MeowCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'nodemon',
      group: 'cool stuff',
      memberName: 'nodemon',
      description: 'NA'
    })
  }

  run (message) {
    message.channel.send('fuck nodemon all ma hommies hate nodemon')
  }
}
