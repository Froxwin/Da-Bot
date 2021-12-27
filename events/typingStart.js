// @ts-check
const { oneLine } = require('common-tags')
const colors = require('colors')
const Event = require('../classes/event')

const typingStart = new Event({
  name: 'typingStart',
  once: false,
  async execute (message) {
    if (message.channel.type === 'DM') {
      console.log(
        colors.bold.green(
          oneLine`
            ${
              colors.bgGreen.black.italic(
                `@${message.user.tag} do be typing in da DMs`
              )
            }
          `
        )
      )
    } else {
      console.log(
        colors.bold.green(
          oneLine`
            ${
              colors.bgGreen.black.italic(
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
})

module.exports = typingStart
