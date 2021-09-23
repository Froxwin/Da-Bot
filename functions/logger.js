const { oneLine } = require('common-tags')
const colors = require('colors')

module.exports =
  (message) => {
    if (message.channel.type === 'DM') {
      console.log(
        colors.bold(
          oneLine`
            ${colors.magenta('[DM]')}:
            [${message.author.tag}]:
            ${colors.rainbow(message.content)}`
        )
      )
    } else {
      console.log(
        colors.bold(
          oneLine`
            ${colors.magenta(`[${message.guild.name}]`)}:
            ${colors.yellow(`[${message.channel.name}]`)}:
            [${message.author.tag}]:
            ${colors.rainbow(message.content)}`
        )
      )
    }
  }
