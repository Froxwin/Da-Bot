const { color, contentFetcher } = require('../../functions/index.js')
const Command = require('../../classes/command')
const sort = new Command({
  name: 'rate',
  alias: ['rate'],
  description: 'Rates stuff',
  group: 'util',
  permissions: null,
  /**
   * @param {import("discord.js").Message} message
   * @param {Array<string>} args
   * @param {string} command
   * @returns void | null
   */
  execute (message, args, command) {
    const x = Math.floor(Math.random() * 11)
    args.length === 0
      ? message.channel.send('provide arguments')
      : message.channel.send({
        embeds: [{
          color: color(),
          title: `${x}/10`,
          description: `I'd rate ${contentFetcher(message, command)} a ${x}/10`
        }]
      })
  }
})

module.exports = sort
