module.exports = {
  name: 'mention',
  description: 'pings the message author',

  execute (message, _args, _command) {
    message.channel.send(`<@!${message.author.id}>`)
  }
}