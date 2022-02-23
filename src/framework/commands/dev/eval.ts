import Command = require('../../../engine/classes/command')
import { Message } from 'discord.js';
import contentFetcher = require('../../../engine/functions/contentFetcher')
module.exports = new Command({
  name: 'run',
  alias: null,
  description: null,
  permissions: null,

  async execute (message: Message, _args, command) {
    message.author.tag !== 'Froxwin#2721'
      ? message.channel.send('daga kotowaru')
      // eslint-disable-next-line no-eval
      : eval(contentFetcher(message, command));
  }
});
