const { contentFetcher } = require('../../functions')

const Command = require('../../Classes/command')

module.exports = new Command({
  name: 'simon-says',
  alias: ['say'],
  description: 'says what you want me to say',
  group: 'misc',

  execute (message, args, command) {
    // message.delete()
    message.channel.send(contentFetcher(message, command))
  }
})
