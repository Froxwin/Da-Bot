module.exports = {
  name: 'cls',
  async execute (client, message, args) {
    if (message.author.tag === 'Froxwin#2721') {
      await message.channel.send('cls\'d')
      console.clear()
    } else {
      message.channel.send('daga kotowaru')
    }
  }
}
