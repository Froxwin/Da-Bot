const config = require('../config/config')

module.exports =
  (message, command) => {
    const returnText =
      message.content
        .substring((config.prefix.length + command.length), message.content.length)
    return returnText
  }
