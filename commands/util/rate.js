const { MessageEmbed } = require('discord.js')
const atom = require('..\\..\\functions')

module.exports = {
  name: 'rate',
  alias: ['rate'],
  description: 'Rates stuff',

  execute (client, message, args, command) {
    if (args.length === 0) {
      message.channel.send('provide arguments')
    } else {
      const x = Math.floor(Math.random() * 11)
      const s = args.toString().replaceAll(',', ' ')

      const eEmbed = new MessageEmbed()
        .setColor(atom.color())
        .setTitle(`${x}/10`)
        .setDescription(`I'd rate ${s} a ${x}/10`)
      message.channel.send({ embeds: [eEmbed] })
    }
  }
}
