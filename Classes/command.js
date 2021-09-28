// @ts-check
const { oneLine } = require('common-tags')
const { MessageEmbed } = require('discord.js')

class Command {
  constructor (options) {
    this.name =
      options.name
    this.alias =
      options.alias || 'No aliases available'
    this.description =
      options.description || 'No description provided'
    this.execute =
      options.execute
    this.permissions =
      options.permissions || 'No special permissions required'
    this.group =
      options.group || 'test'
  }

  permCheck (member) {
    for (const perm of this.permissions) {
      if (member.permissions.has(perm)) {
        return true
      }
    }
  }

  missingPerms (message) {
    if (!this.permCheck(message.member)) {
      const eEmbed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Fatal Error')
        .setDescription(
          oneLine`<@${message.author.id}>
          you don't have permissions to use this command`)
        .setTimestamp()

      message.channel.send({ embeds: [eEmbed] })
      return true
    }
  }
}

module.exports = Command
