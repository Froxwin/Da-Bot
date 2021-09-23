const { oneLineTrim } = require('common-tags')
const colors = require('colors')

module.exports =
  (message) => {
    if (message.channel.type === 'DM') {
      console.log(
        colors.bold(
          oneLineTrim`
          ${colors.magenta(`${colors.bgMagenta(`[${colors.white('DM')}]`)}${colors.bgBlue('')}`)}
          ${colors.blue(`${colors.bgBlue(`[${colors.gray(message.author.tag)}]`)} `)}
          ${colors.rainbow(message.content)}`
        )
      )
    } else {
      console.log(
        colors.bold(
          oneLineTrim`
            ${colors.magenta(`${colors.bgMagenta(`[${colors.white(message.guild.name)}]`)}${colors.bgYellow('')}`)}
            ${colors.yellow(`${colors.bgYellow(`[${colors.gray(message.channel.name)}]`)}${colors.bgBlue('')}`)}
            ${colors.blue(`${colors.bgBlue(`[${colors.gray(message.author.tag)}]`)} `)}
            ${colors.rainbow(message.content)}`
        )
      )
    }
  }
