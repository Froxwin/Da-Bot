const { oneLine } = require('common-tags')
const colors = require('colors')

module.exports = {
  name: 'logger',
  description: 'logs messages',
  execute (message) {
    if (message.channel.type === 'DM') {
      console.log(
        colors.bold(
          `[DM]:[${message.author.tag}]:${colors.rainbow(message.content)}`
        )
      )
    } else {
      console.log(
        colors.bold(
          oneLine`${colors.blue(`[${message.guild.name}]`)}:
                  ${colors.yellow(`[${message.channel.name}]`)}:
                  [${message.author.tag}]: ${colors.rainbow(message.content)}`
        )
      )
    }
  }
}
