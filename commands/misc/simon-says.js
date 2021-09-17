module.exports = {
  name: 'simon-says',
  alias: ['say'],
  description: 'says what you want me to say',

  execute (client, message, args) {
    /*
    message.delete()
    const messsaggge = args.slice(0, args.length)
    const send = messsaggge.toString()
    const s = send.trim().replaceAll(',', ' ')
    message.channel.send(s)
    */
    message.delete()
    message.channel.send(args.toString().replaceAll(',', ' '))
  }
}
