const { MessageAttachment } = require('discord.js')

module.exports = {

  name: 'source-code',
  alias: ['source-code', 'src-code', 'sc'],
  description: 'shows my insides',

  execute (client, message, args) {
    message.channel.send('So you want to see me naked <:bot:849669570604171295>')
    const attachment = new MessageAttachment('../index.js')
    message.channel.send(attachment)
  }
}
