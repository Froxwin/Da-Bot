const { oneLineTrim, oneLine } = require('common-tags')
const colors = require('colors')

module.exports =
  (client) => {
    client.on('ready', () => {
      if (client.readyAt.getHours() > 12) {
        console.log(colors.bold.cyan(oneLine`
                      ${oneLineTrim`@${client.user.tag} has logged in at 
                      ${client.readyAt.getHours() - 12}:
                      ${client.readyAt.getMinutes()}:
                      ${client.readyAt.getSeconds()} pm`}`))
      } else {
        console.log(colors.bold.blue(oneLine`
                      ${oneLineTrim`@${client.user.tag} has logged in at 
                      ${client.readyAt.getHours()}:
                      ${client.readyAt.getMinutes()}:
                      ${client.readyAt.getSeconds()}: am`}`))
      }
    })
  }
