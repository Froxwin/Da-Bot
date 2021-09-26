const prefix = require('../config/prefix')

module.exports =
  (message, command) => {
    const returnText =
      message.content
        .substring((prefix.length + command.length), message.content.length)
    return returnText
  }
