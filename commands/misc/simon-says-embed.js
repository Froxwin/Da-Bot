const { MessageEmbed } = require('discord.js')
const randColor = Math.floor(Math.random() * 16777215).toString(16)

module.exports = {

  name: 'simon-says-embed',
  aliases: ['embed-says', 'es'],
  group: 'cool stuff',
  memberName: 'simon-says-embed',
  description: 'says what you want me to say',

  execute (client, message, args) {
    // message.delete()
    const messsaggge = args.slice(0, args.length)
    const send = messsaggge.toString()
    const s = send.trim().replaceAll(',', ' ')

    message.channel.awaitMessages(m => m.author.id === message.author.id,
      { max: 1, time: 30000 }).then(collected => {
      // eslint-disable-next-line no-unused-vars
      const [cmd, ...arg] = collected.first().content
        .trim()
        .split(/\s+/)
      const messsagggee = arg.slice(0, arg.length)
      const send = messsagggee.toString()
      const b = send.trim().replaceAll(',', ' ')

      const eEmbed = new MessageEmbed()
        .setColor(randColor)
        .setTitle(b)
        .setDescription(s)
      message.channel.send(eEmbed)
    })
  }
}
