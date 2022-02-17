import { PermissionString } from 'discord.js'
import { join as Ω } from 'path'
import { readdir as Γ } from 'fs/promises'

interface CommandOptions {
  name: string
  alias: string[] | null
  description: string | null
  execute: Function
  permissions: PermissionString[] | null
}

export = class Command {
  name: string
  description: string
  alias: string | string[]
  permissions: PermissionString[] | string
  group!: string
  execute: Function
  constructor (options: CommandOptions) {
    this.name = options.name
    this.alias = options.alias ?? 'No aliases available'
    this.description = options.description ?? 'No description provided'
    this.permissions = options.permissions ?? 'No perms required'
    this.execute = options.execute;
    (async (dir) =>
      (await Γ((Ω(__dirname, dir))))
        .forEach(async grp =>
          (await Γ(Ω(__dirname, `${dir}/${grp}`)))
            .forEach(cmd =>
              (cmd.split('.')[0] === this.name) &&
              (this.group = grp)
            )
        )
    )('../../framework/commands')
  }
}
