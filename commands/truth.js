module.exports = {
  name: 'truth',
  memberName: 'truth',
  description: 'magic 8 ball',

  execute (client, message, args) {
    if (args.length === 0) {
      message.channel.send('provide arguments')
    };
    const x = Math.floor(Math.random() * 3)
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
