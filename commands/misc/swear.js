module.exports = {
  name: 'swear',
  description: 'sends a random swear word',
  execute (client, message, args) {
    const list = ['fuck', 'retard', 'mother fucker', 'bastard', 'oni chan']
    const index = Math.round(Math.random() * list.length - 1)
    const word = list[index]
    message.channel.send(word)
  }
}
