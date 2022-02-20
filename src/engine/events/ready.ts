import Event = require('../classes/event')
import SOFTandWet = require('../classes/SOFTandWET')

const ready = new Event({
  name: 'ready',
  once: true,
  async execute (client: SOFTandWet) {
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

module.exports = ready;
