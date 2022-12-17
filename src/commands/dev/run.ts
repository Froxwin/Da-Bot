import { client } from '../../index.js';
import { exec } from 'child_process';
import { fetchContent } from '../../engine/util.js';

client.newCommand({
  name: 'run',
  isDmOnly: true,
  execute(message, _args, command) {
    message.author.tag !== 'Froxwin#2721'
      ? message.channel.send('daga kotowaru')
      : exec(fetchContent(message, command), (err, out, stderr) => {
          err && message.channel.send(err.message.toString());
          stderr && message.channel.send(stderr.toString());
          out &&
            message.channel.send(`\`\`\`ansi\n${out.toString()}\n\`\`\``);
        });
  }
});
