import { logger, stuff } from '../functions/index.js'
import Event = require('../classes/event')
import client = require('../config/client')
import { Message } from 'discord.js'

const messageCreate = new Event({
  name: 'messageCreate',
  once: false,
  async execute (msg: Message) {
    logger(msg); stuff(msg)
    if (!msg.content.startsWith(client.prefix) ||
      msg.author.bot) return

    const [command, ...args] =
      msg.content.toLowerCase().trim()
        .substring(client.prefix.length).split(/\s+/)

    const exeCommand =
      client.commands.get(command) ||
      client.commands.find(Δ => Δ.alias &&
        Δ.alias.includes(command))

    exeCommand.execute(msg, args, command)
  }
})

export = messageCreate
