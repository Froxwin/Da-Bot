const { MessageEmbed } = require('discord.js')
const atom = require('..\\..\\functions')
const Command = require('../../Classes/command')

module.exports = new Command({
  name: 'simon-says-embed',
  alias: ['embed-says', 'es'],
  description: 'says what you want me to say',
  group: 'misc',

  execute (message, args, command) {
    message.delete()
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
        .setColor(atom.color())
        .setTitle(b)
        .setDescription(s)
      message.channel.send({ embed: [eEmbed] })
    })
  }
})
