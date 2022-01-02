module.exports =
  /**
  * @param {import('discord.js').Message} message
  * @param {string} command
  * @returns String
  */
  (message, command) => {
    const returnText =
      message.content
        .substring((message.client.prefix.length + command.length), message.content.length)
    return returnText
  }
