const config = require('..\\base\\config')

module.exports =
  (message, command) => {
    const returnText =
      message.content
        .substring((config.prefix.length + command.length), message.content.length)
    return returnText
  }
