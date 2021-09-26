module.exports = {
  name: 'mention',
  description: 'pings the message author',

  execute (message, args, command) {
    message.channel.send(`<@!${message.author.id}>`)
  }
}
