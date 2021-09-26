const Command = require('../../Classes/command')

module.exports = new Command({
  name: 'cls',

  async execute (message, args, command) {
    if (message.author.tag === 'Froxwin#2721') {
      await message.channel.send('cls\'d')
      console.clear()
    } else {
      message.channel.send('daga kotowaru')
    }
  }
})
