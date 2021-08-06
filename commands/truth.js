module.exports = {
  name: 'truth',
  aliases: ['8ball', 'truth'],
  memberName: 'truth',
  description: 'magic 8 ball',

  execute (message, args) {
    if (args.length === 0) {
      message.channel.send('provide arguments')
    };
    const x = Math.floor(Math.random() * 2)
    if (args.length !== 0 && x === 0) {
      message.channel.send('Yes')
    };
    if (args.length !== 0 && x === 1) {
      message.channel.send('No')
    };
    if (args.length !== 0 && x === 2) {
      message.channel.send('Perhaps')
    };
  }
}
