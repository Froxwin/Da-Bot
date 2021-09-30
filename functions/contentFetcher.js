const prefix = require('../config/prefix')

module.exports =
  /**
  * @param {import('discord.js').Message} message
  * @param {string} command
  * @returns String
  */
  (message, command) => {
    const returnText =
      message.content
        .substring((prefix.length + command.length), message.content.length)
    return returnText
  }
