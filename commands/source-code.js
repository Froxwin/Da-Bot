const { MessageAttachment } = require('discord.js')

module.exports = {

  name: 'source-code',
  aliases: ['source-code', 'src-code', 'sc'],
  group: 'cool stuff',
  memberName: 'source-code',
  description: 'shows my insides',

  execute (message) {
    message.channel.send('So you want to see me naked <:bot:849669570604171295>')
    const attachment = new MessageAttachment('../index.js')
    message.channel.send(attachment)
  }
}
