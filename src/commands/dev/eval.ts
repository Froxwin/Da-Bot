import { client } from '../../index.js';
import { fetchContent } from '../../engine/util.js';

client.newCommand({
  name: 'eval',
  isDmOnly: true,
  execute(message, _args, command) {
    try {
      message.author.tag !== 'Froxwin#2721'
        ? message.channel.send('daga kotowaru')
        : eval(fetchContent(message, command));
    } catch (err) {
      console.log(err);
    }
  }
});
