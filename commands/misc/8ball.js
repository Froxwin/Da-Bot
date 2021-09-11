module.exports = {
  name: '8ball',
  alias: ['truth', 'roll'],
  description: 'magic 8 ball',

  execute (client, message, args) {
    if (args.length === 0) {
      message.channel.send('provide arguments')
    };
    const x = Math.floor(Math.random() * 3)
    switch (x) {
      case 0:
        message.channel.send('Yes')
        break
      case 1:
        message.channel.send('No')
        break
      case 2:
        message.channel.send('Perhaps')
        break
      default:
        break
    }
  }
}
