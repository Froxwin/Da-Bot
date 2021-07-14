module.exports = {

  name: 'hello',
  group: 'cool stuff',
  memberName: 'hello',
  description: 'Replies with a hello',

  execute (message) {
    message.channel.send('Hello World')
  }
}
