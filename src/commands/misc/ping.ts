import { client } from '../../index.js';
import { Message } from 'discord.js';
import { color } from '../../engine/util.js';

client.newCommand({
  name: 'ping',
  alias: ['latency', 'pong'],
  description: 'ping',
  isDmOnly: false,
  execute(msg: Message, _args, _command) {
    (async function() {
      const tmp = await msg.channel.send('Pinging...');
      await tmp.edit('Ponged');
      await tmp.delete();
      msg.channel.send({
        embeds: [
          {
            color: parseInt(color(), 16),
            description:
              'Ponged **' +
              ((tmp.createdTimestamp || tmp.editedTimestamp)! -
                (msg.createdTimestamp || msg.editedTimestamp)!) +
              ' ms**'
          }
        ]
      });
    })();
  }
});
