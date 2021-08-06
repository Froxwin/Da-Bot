module.exports = {

  name: 'mention',
  group: 'cool stuff',
  memberName: 'mention',
  description: 'pings the message author',

  execute (client, message, args) {
    message.channel.send(`<@!${message.author.id}>`)
  }
}
