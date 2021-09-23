const { oneLineTrim } = require('common-tags')
const colors = require('colors')

module.exports =
  (client) => {
    client.on(
      'ready',
      () => {
        if (client.readyAt.getHours() > 12) {
          console.log(
            colors.bold.cyan(
              oneLineTrim`
                ${
                  colors.bgCyan.black(
                    oneLineTrim`
                      @${client.user.tag} has logged in at 
                      ${client.readyAt.getHours() - 12}:
                      ${client.readyAt.getMinutes()}:
                      ${client.readyAt.getSeconds()} pm`
                  )
                }
              `
            )
          )
        } else {
          console.log(
            colors.bold.cyan(
              oneLineTrim`
                ${
                  colors.bgCyan.black(
                    oneLineTrim`
                      @${client.user.tag} has logged in at 
                      ${client.readyAt.getHours()}:
                      ${client.readyAt.getMinutes()}:
                      ${client.readyAt.getSeconds()} am`
                  )
                }
              `
            )
          )
        }
      }
    )
  }
