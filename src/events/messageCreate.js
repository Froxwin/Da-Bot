const { logger, stuff } = require('../functions/index.js')
const Event = require('../classes/event')
const client = require('../config/client')

const messageCreate = new Event({
  name: 'messageCreate',
  once: false,
  /** @param {import('discord.js').Message} msg */
  async execute (msg) {
    logger(msg); stuff(msg)
    if (!msg.content.startsWith(client.prefix) || msg.author.bot) return

    const [command, ...args] = msg.content.toLowerCase()
      .trim().substring(client.prefix.length).split(/\s+/)
    const exeCommand =
        client.commands.get(command) ||
        client.commands.find(tp =>
          tp.alias && tp.alias.includes(command))
    exeCommand.execute(msg, args, command)
  }
})

module.exports = messageCreate
