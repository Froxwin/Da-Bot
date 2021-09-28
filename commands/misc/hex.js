const Command = require('../../Classes/command')

module.exports = new Command({
  name: 'hex',
  execute (message, args, command) {
    const raw = parseInt(16, 16)
    message.channel.send(raw.toString())
  }
})
