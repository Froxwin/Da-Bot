const { logger, stuff } = require('../functions/index.js')
const Event = require('../classes/event')
const messageCreate = new Event({
  name: 'messageCreate',
  once: false,
  /** @param {import('discord.js').Message} msg */
  async execute (msg) {
    logger(msg); stuff(msg)
    if (!msg.content.toLowerCase().startsWith(msg.client.prefix)) return
    const [command, ...args] = msg.content.toLowerCase().trim()
      .substring(msg.client.prefix.length).split(/\s+/)
    const exeCommand =
        msg.client.commands.get(command) ||
        msg.client.commands.find(tp => tp.alias && tp.alias.includes(command))
    exeCommand.execute(msg, args, command)
  }
})

module.exports = messageCreate
