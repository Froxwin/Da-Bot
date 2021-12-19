module.exports = class Command {
  /** @typedef {('admin' | 'misc' | 'test' | 'util')} group */
  /**
   * @param {{
   *    name: string,
   *    alias: Array<string>,
   *    description: string,
   *    execute: Function,
   *    permissions: Array<import('discord.js').PermissionResolvable>,
   *    group: group
   * }} options
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
    let result
    for (const perm of this.permissions) {
      result = member.permissions.has(perm)
    }
    return result
  }
}
