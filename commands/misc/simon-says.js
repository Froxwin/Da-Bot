const { contentFetcher } = require('../../functions')

module.exports = {
  name: 'simon-says',
  alias: ['say'],
  description: 'says what you want me to say',

  execute (client, message, args, command) {
    message.delete()
    message.channel.send(contentFetcher(message, command))
  }
}
