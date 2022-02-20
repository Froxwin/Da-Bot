import Command = require('../../../engine/classes/command')
import { Message as msg } from 'discord.js';
import { color, contentFetcher as cf } from
  '../../../engine/functions/index.js';

const rate = new Command({
  name: 'rate',
  alias: null,
  description: 'Rates stuff',
  permissions: null,

  execute (message: msg, args: string[], command: string) {
    const x = Math.floor(Math.random() * 11);
    !args.length
      ? message.channel.send('Provide Arguments')
      : message.channel.send({
        embeds: [{
          color: `#${color()}`,
          title: `${x}/10`,
          description:
            `I'd rate ${cf(message, command)} a ${x}/10`
        }]
      });
  }
});

export = rate
