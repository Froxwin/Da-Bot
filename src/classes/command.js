module.exports = class Command {
  /** @typedef {'admin' | 'misc' | 'test' | 'util'} group */
  /**
   * Creates a Command
   * @param {{
   *    name: string,
   *    alias: Array<string>,
   *    description: string,
   *    execute: Function,
   *    permissions: Array<import('discord.js').PermissionResolvable>,
   *    group: group
   * }} options - Command config
   */
  constructor (options) {
    this.name = options.name
    this.alias = options.alias ?? 'No aliases available'
    this.description = options.description ?? 'No description provided'
    this.permissions = options.permissions ?? 'No perms required'
    this.group = options.group ?? 'test'
    this.execute = options.execute
  }
}
