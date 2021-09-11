module.exports = {
  name: 'cls',
  execute (client, message, args) {
    if (message.author.tag === 'Froxwin#2721') {
      console.clear()
      message.channel.send('cls\'d')
    } else {
      message.channel.send('daga kotowaru')
    }
  }
}
