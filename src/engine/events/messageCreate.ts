import { logger, stuff } from '../functions/index';
import Event = require('../classes/event')
import Φ = require('../config/client')
import { Message } from 'discord.js';

const messageCreate = new Event({
  name: 'messageCreate',
  once: false,
  execute (msg: Message) {
    logger(msg); stuff(msg);
    if (!msg.content.startsWith(Φ.prefix)) return;
    if (msg.author.bot) return;
    const [cmd, ...args] = msg.content
      .toLowerCase()
      .trim()
      .substring(Φ.prefix.length)
      .split(/\s+/);

    (Φ.commands.get(cmd) ||
     Φ.commands.find(Δ => Δ.alias.includes(cmd))
    )?.execute(msg, args, cmd);
  }
});

export = messageCreate
