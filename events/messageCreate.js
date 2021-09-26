const prefix = require('../config/prefix')
const atom = require('..\\functions')

module.exports = {
  name: 'messageCreate',
  async execute (message) {
    atom.logger(message)
    atom.stuff(message)
    if (message.content.toLowerCase().startsWith(prefix)) {
      const [command, ...args] = message.content.toLowerCase().trim()
        .substring(prefix.length).split(/\s+/)
      try {
        const exeCommand = message.client.commands.get(command) ||
          message.client.commands
            .find(tp => tp.alias && tp.alias.includes(command))
        console.time()
        exeCommand.execute(message, args, command)
        console.timeEnd()
      } catch (error) {
        console.error(error)
      }
    }
  }
}
