const { oneLine } = require('common-tags')
const colors = require('colors')

module.exports =
  (client) => {
    client.on(
      'typingStart',
      (message) => {
        if (message.channel.type === 'DM') {
          console.log(
            colors.bold.magenta(
              oneLine`
                ${
                  colors.bgMagenta.black.italic(
                    `@${message.user.tag} do be typing in da DMs`
                  )
                }
              `
            )
          )
        } else {
          console.log(
            colors.bold.magenta(
              oneLine`
                ${
                  colors.bgMagenta.black.italic(
                    oneLine`
                      @${message.user.tag} do be typing in
                      #${message.channel.name} in
                      %${message.guild.name.toUpperCase()}`
                  )
                }
              `
            )
          )
        }
      }
    )
  }
