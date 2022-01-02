const { MessageAttachment } = require('discord.js')
const Command = require('../../classes/command')

module.exports = new Command({
  name: 'source-code',
  alias: ['source-code', 'src-code', 'sc'],
  description: 'shows my insides',
  group: 'misc',
  permissions: null,

  /**
   * @param {import('discord.js').Message} message
   * @param {string | any[]} args
   * @param {string} command
   */
  execute (message, args, command) {
    message.channel.send('So you want to see me naked <:bot:849669570604171295>')
    const attachment = new MessageAttachment('..\\index.js')
    message.channel.send({ files: [attachment] })
  }
})
