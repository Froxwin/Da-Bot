const Command = require('../../Classes/command')
module.exports = new Command({
  name: 'cls',
  alias: null,
  group: 'test',
  description: null,
  permissions: null,

  /**
   * @param {import("discord.js").Message} message
   * @param {Array<string>} args
   * @param {Command} command
   */
  async execute (message, args, command) {
    message.author.tag === 'Froxwin#2721'
      ? message.channel.send('cls\'d').then(() => console.clear())
      : message.channel.send('daga kotowaru')
  }
})
