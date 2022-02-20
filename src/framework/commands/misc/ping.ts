import Command = require('../../../engine/classes/command')
import { Message } from 'discord.js';
import { color } from '../../../engine/functions/index.js';

const ping = new Command({
  name: 'ping',
  permissions: null,
  alias: ['latency', 'pong'],
  description: 'ping',

  async execute (msg: Message, _args, _command) {
    const tmp = await msg.channel.send('Pinging...');
    await tmp.edit('Ponged');
    await tmp.delete();
    msg.channel.send({
      embeds: [{
        color: `#${color()}`,
        description:
          'Ponged **' +
          ((tmp.createdTimestamp || tmp.editedTimestamp)! -
          (msg.createdTimestamp || msg.editedTimestamp)!) +
          ' ms**'
      }]
    });
  }
});

export = ping
