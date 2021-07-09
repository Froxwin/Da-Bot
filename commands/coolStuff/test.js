const { Command } = require('discord.js-commando')

module.exports = class MeowCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'test',
      group: 'cool stuff',
      memberName: 'test',
      description: 'Sends a message in the same channel as the command'
    })
  }

  run (message) {
    message.channel.send("get nae nae'd")
    console.log("get nae nae'd")
  }
}
