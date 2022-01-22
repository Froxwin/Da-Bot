module.exports = (message, command) =>
  message.content.substring(
    message.client.prefix.length + command.length,
    message.content.length
  )
