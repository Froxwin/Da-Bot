const Event = require('../classes/event')

const ready = new Event({
  name: 'ready',
  once: true,
  /** @param {import('discord.js').Client} client */
  async execute (client) {
    (client.readyAt.getHours() > 12)
      ? console.log(
        '\x07' +
        '\x1b[38;2;14;249;254m' +
        '\x1b[48;2;14;249;254m' +
        '\x1b[38;2;28;28;28m' +
        `${client.user.tag} has logged in at ` +
        `${client.readyAt.getHours() - 12}:` +
        `${client.readyAt.getMinutes()}:` +
        `${client.readyAt.getSeconds()} pm` +
        '\x1b[0m' +
        '\x1b[38;2;14;249;254m' +
        '\x1b[0m'
      )
      : console.log(
        '\x07' +
        '\x1b[38;2;14;249;254m' +
        '\x1b[48;2;14;249;254m' +
        '\x1b[38;2;28;28;28m' +
        `${client.user.tag} has logged in at ` +
        `${client.readyAt.getHours()}:` +
        `${client.readyAt.getMinutes()}:` +
        `${client.readyAt.getSeconds()} pm` +
        '\x1b[0m' +
        '\x1b[38;2;14;249;254m' +
        '\x1b[0m'
      )
  }
})

module.exports = ready
