const { MessageEmbed } = require('discord.js')

module.exports = {

  name: 'rate',
  group: 'cool stuff',
  aliases: ['rate'],
  memberName: 'rate',
  description: 'Rates stuff',

  execute (message) {
    // eslint-disable-next-line no-unused-vars
    const [cmd, ...args] = message.content
      .trim()
      .split(/\s+/)

    if (args.length === 0) {
      message.channel.send('provide arguments')
      return
    };
    const randBlue = Math.floor(Math.random() * 255)
    const randGreen = Math.floor(Math.random() * 255)
    const color = '#' + (0).toString(16) + (randGreen).toString(16) + (randBlue).toString(16)
    const x = Math.floor(Math.random() * 10)
    const messsaggge = args.slice(0, args.length)
    const send = messsaggge.toString()
    const s = send.trim().replaceAll(',', ' ')

    const eEmbed = new MessageEmbed()
      .setColor(color)
      .setTitle(`${x}/10`)
      .setDescription(`${message.author} I'd rate ${s} a ${x}/10`)
      .setTimestamp()

    message.channel.send({ embeds: [eEmbed] })
  }
}
