module.exports = {
  name: 'mention',
  description: 'pings the message author',

  execute (client, message, args, command) {
    message.channel.send(`<@!${message.author.id}>`)
  }
}
