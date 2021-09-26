const { Permissions } = require('discord.js')
const Command = require('../../Classes/command')

const test = new Command({
  name: 'test',
  permissions:
  [
    Permissions.FLAGS.KICK_MEMBERS,
    Permissions.FLAGS.BAN_MEMBERS,
    Permissions.FLAGS.ADMINISTRATOR,
    Permissions.FLAGS.MUTE_MEMBERS
  ],
  execute (message, args, command) {
    if (this.missingPerms(message)) {
      return null
    } else {
      message.channel.send('get nae nae\'d')
    }
  }
})

module.exports = test
