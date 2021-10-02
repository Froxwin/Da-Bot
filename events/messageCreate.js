// @ts-check
const prefix = require('../config/prefix')
const atom = require('../functions')
const Event = require('../Classes/event')

const messageCreate = new Event({
  name: 'messageCreate',
  once: false,
  async execute (message) {
    atom.logger(message)
    atom.stuff(message)
    if (message.content.toLowerCase().startsWith(prefix)) {
      const [command, ...args] = message.content.toLowerCase().trim()
        .substring(prefix.length).split(/\s+/)
      try {
        const exeCommand = message.client.commands.get(command) ||
          message.client.commands.find(tp => tp.alias && tp.alias.includes(command))
        exeCommand.execute(message, args, command)
      } catch (error) {
        console.error(error)
      }
    }
  }
})

module.exports = messageCreate
