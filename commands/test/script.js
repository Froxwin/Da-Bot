const Command = require('../../Classes/command')
const atom = require('..\\..\\functions')

module.exports = new Command({
  name: 'script',
  group: null,
  alias: null,
  description: null,
  permissions: null,
  async execute (message, args, command) {
    if (message.author.tag === 'Froxwin#2721') {
      try {
        // eslint-disable-next-line no-eval
        await eval(atom.contentFetcher(message, command))
      } catch (error) {
        message.channel.send(`\`\`\`${error}\`\`\``)
      }
    } else {
      message.channel.send('daga kotowaru')
    }
  }
})
