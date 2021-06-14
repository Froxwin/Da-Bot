const { Command } = require('discord.js-commando')

module.exports = class MeowCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'simon-says',
      aliases: ['simon-says', 'say'],
      group: 'cool stuff',
      memberName: 'simon-says',
      description: 'says what you want me to say'
    })
  }

  run (message) {
    // eslint-disable-next-line no-unused-vars
    const [cmd, ...args] = message.content
      .trim()
      .split(/\s+/)
    message.delete()
    const messsaggge = args.slice(0, args.length)
    const send = messsaggge.toString()
    const s = send.trim().replaceAll(',', ' ')
    message.channel.send(s)
  }
}
