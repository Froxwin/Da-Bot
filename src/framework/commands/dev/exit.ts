import Command = require('../../../engine/classes/command')
import { Message } from 'discord.js';
module.exports = new Command({
  name: 'exit',
  alias: null,
  description: null,
  permissions: null,

  execute (message: Message, _args, _command) {
    message.author.tag === 'Froxwin#2721'
      ? message.channel.send('sayonora')
        .then(() => message.client.destroy())
      : message.channel.send('daga kotowaru');
  }
});
