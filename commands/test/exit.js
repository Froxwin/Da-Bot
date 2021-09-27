const Command = require('../../Classes/command')

module.exports = new Command({
  name: 'exit',

  async execute (message, args, command) {
    if (message.author.tag === 'Froxwin#2721') {
      await message.channel.send('sayonora')
      message.client.destroy()
    } else {
      message.channel.send('daga kotowaru')
    }
  }
})
