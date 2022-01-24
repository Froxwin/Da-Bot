const Command = require('../../../engine/classes/command')
const { contentFetcher } = require('../../../engine/functions/index.js')

module.exports = new Command({
  name: 'script',
  group: null,
  alias: null,
  description: null,
  permissions: null,
  async execute (message, _args, command) {
    message.author.tag === 'Froxwin#2721'
      ? await eval(contentFetcher(message, command))
      : message.channel.send('daga kotowaru')
  }
})
