const config = require('../config/config')
const atom = require('..\\functions')
const client = config.client

module.exports = {
  name: 'messageCreate',
  async execute (message) {
    atom.logger(message)
    atom.stuff(message)
    if (message.content.toLowerCase().startsWith(config.prefix)) {
      const [command, ...args] = message.content.toLowerCase().trim()
        .substring(config.prefix.length).split(/\s+/)
      try {
        const exeCommand = client.commands.get(command) ||
          client.commands.find(tp => tp.alias && tp.alias.includes(command))
        exeCommand.execute(client, message, args, command)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
