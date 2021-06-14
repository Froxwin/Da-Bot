const { Command } = require('discord.js-commando')

module.exports = class MeowCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'truth',
      group: 'cool stuff',
      aliases: ['8ball', 'truth'],
      memberName: 'truth',
      description: 'magic 8 ball'
    })
  }

  run (message) {
    // eslint-disable-next-line no-unused-vars
    const [cmd, ...args] = message.content
      .trim()
      .split(/\s+/)

    if (args.length === 0) {
      message.channel.send('provide arguments')
    };
    const x = Math.floor(Math.random() * 2)
    if (args.length !== 0 && x === 0) {
      message.channel.send('Yes')
    };
    if (args.length !== 0 && x === 1) {
      message.channel.send('No')
    };
    if (args.length !== 0 && x === 2) {
      message.channel.send('Perhaps')
    };
  }
}
