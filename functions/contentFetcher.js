module.exports =
  (message, prefix, command) => {
    const returnText = message.content.substring((prefix.length + command.length), message.content.length)
    return returnText
  }
