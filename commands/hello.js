module.exports = {

  name: 'hello',
  group: 'cool stuff',
  memberName: 'hello',
  description: 'Replies with a hello',

  execute (client, message, args) {
    message.channel.send('Hello World')
  }
}
