// @ts-check
const { oneLine } = require('common-tags')
const { MessageEmbed } = require('discord.js')

class Command {
  /** @typedef {('admin' | 'misc' | 'test' | 'util')} group */
  /**
   * @param {{
   *    name: string,
   *    alias: Array<string>,
   *    description: string,
   *    execute: Function,
   *    permissions: Array<import('discord.js').PermissionResolvable>,
   *    group: group}} options
   */
  constructor (options) {
    /** @property {string} name */
    this.name = options.name
    /** @property {string | any} alias */
    this.alias = options.alias || 'No aliases available'
    /** @property {string} description */
    this.description = options.description || 'No description provided'
    /** @property {Array<PermissionResolvable>} permissions */
    this.permissions = options.permissions || null
    /** @property {string} group */
    this.group = options.group || 'test'
    /** @property {Function} execute */
    this.execute = options.execute
  }

  /**
   * @param {import('discord.js').GuildMember} member
   * @returns bool
   */
  permCheck (member) {
    for (const perm of this.permissions) {
      if (member.permissions.has(perm)) {
        return true
      }
    }
  }

  /**
   * @param {import('discord.js').Message} message
   * @returns bool
   */
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
