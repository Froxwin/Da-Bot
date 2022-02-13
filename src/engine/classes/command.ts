import { PermissionResolvable } from 'discord.js'

type group = 'admin' | 'misc' | 'test' | 'util' | 'dev'
interface CommandOptions {
  name: string
  alias: string[] | null
  description: string | null
  execute: Function
  permissions: PermissionResolvable | null
  group: group
}

export = class Command {
  name: string
  description: string
  alias: string | string[]
  permissions: PermissionResolvable | string
  group: group
  execute: Function
  constructor (options: CommandOptions) {
    this.name = options.name
    this.alias = options.alias ?? 'No aliases available'
    this.description = options.description ?? 'No description provided'
    this.permissions = options.permissions ?? 'No perms required'
    this.group = options.group
    this.execute = options.execute
  }
}