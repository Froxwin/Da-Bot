const Command = require('../../Classes/command')
const { contentFetcher } = require('../../functions/index.js')

module.exports = new Command({
  name: 'script',
  group: null,
  alias: null,
  description: null,
  permissions: null,
  async execute (message, args, command) {
    (message.author.tag === 'Froxwin#2721' &&
      // eslint-disable-next-line no-eval
      await eval(contentFetcher(message, command))) ||
    message.channel.send('daga kotowaru')
  }
})
