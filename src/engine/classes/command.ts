type group = 'admin' | 'misc' | 'test' | 'util'
export = class Command {
  description: string
  name: string
  alias: string | string[]
  permissions: any
  group: group
  execute: Function
  constructor (options: {
      name: string
      alias: Array<string>
      description: string
      execute: Function
      permissions: Array<import('discord.js').PermissionResolvable>
      group: group
    }) {
    this.name = options.name
    this.alias = options.alias ?? 'No aliases available'
    this.description = options.description ?? 'No description provided'
    this.permissions = options.permissions ?? 'No perms required'
    this.group = options.group ?? 'test'
    this.execute = options.execute
  }
}
