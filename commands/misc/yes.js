module.exports = {
  name: 'yes',
  description: 'yes',
  execute (client, message, args, command) {
    message.channel.send('yes')
  }
}
