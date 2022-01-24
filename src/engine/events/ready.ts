import Event = require('../classes/event')
import SOFTandWet = require('../classes/SOFTandWET')

const ready = new Event({
  name: 'ready',
  once: true,
  async execute (client: SOFTandWet) {
    console.log(
      '\x1b[38;2;14;249;254m' +
      '\x1b[48;2;14;249;254;38;2;28;28;28m' +
      `${client.user?.tag} has logged in at ` +
      `${(client.readyAt!.getHours() > 12)
          ? client.readyAt!.getHours() - 12
          : client.readyAt!.getHours()
        }:` +
      `${client.readyAt!.getMinutes()}:` +
      `${client.readyAt!.getSeconds()} pm` +
      '\x1b[0m\x1b[38;2;14;249;254m\x1b[0m'
    )
  }
})

module.exports = ready
