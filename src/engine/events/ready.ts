import { client } from '../../index.js';
import { SoftAndWet } from '../SOFTandWET.js';

client.newEvent({
  name: 'ready',
  once: true,
  exec(client: SoftAndWet) {
    console.clear();
    console.log(
      '\n\x1b[38;2;255;185;99m[ \x1b[0m' +
        `\x1b[38;2;252;204;255m${client.user?.tag} \x1b[0m` +
        '\x1b[38;2;161;255;247mis running on process\x1b[0m' +
        ` \x1b[93m${process.pid}\x1b[0m` +
        '\x1b[38;2;255;185;99m ]\x1b[0m\n'
    );
  }
});
