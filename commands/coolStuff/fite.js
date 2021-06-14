const { Command } = require('discord.js-commando')

module.exports = class MeowCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'fite',
      group: 'cool stuff',
      memberName: 'fite',
      description: 'fights you'
    })
  }

  run (message) {
    message.channel.send('https://tenor.com/view/star-platinum-jojos-bizarre-adventure-mrw-reaction-reactions-gif-5064521')
  }
}
