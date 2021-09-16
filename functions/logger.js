const { oneLine } = require('common-tags')
const colors = require('colors')

module.exports = {
  name: 'logger',
  description: 'logs messages',
  execute (message) {
    console.log(colors.bold(oneLine`
    ${colors.blue(`[${message.guild.name}]`)}:
    ${colors.yellow(`[${message.channel.name}]`)}:[${message.author.tag}]:
    ${colors.rainbow(message.content)}
    `))
  }
}
