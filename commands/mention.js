module.exports = {

  name: 'mention',
  group: 'cool stuff',
  memberName: 'mention',
  description: 'pings the message author',

  execute (message) {
    message.channel.send(`<@!${message.author.id}>`)
  }
}
