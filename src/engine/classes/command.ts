import { PermissionResolvable } from 'discord.js'
type group = 'admin' | 'misc' | 'test' | 'util' | 'dev'
export = class Command {
  description: string
  name: string
  alias: string | string[]
  permissions: PermissionResolvable | string
  group: group
  execute: Function
  constructor (options: {
      name: string
      alias: string[] | null
      description: string | null
      execute: Function
      permissions: PermissionResolvable | null
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
