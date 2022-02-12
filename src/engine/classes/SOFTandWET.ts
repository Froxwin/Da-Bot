import {
  Client, ClientOptions, Collection
} from 'discord.js'
import { join as Ω } from 'path'
import { readdir } from 'fs/promises'
import Command = require('./command')
import Button = require('./button')

const Γ = path => Ω(__dirname, path)

interface SOFTandWEToptions {
  BaseClient: ClientOptions
  prefix: string
}

export = class SOFTandWET extends Client {
  commands: Collection<string, Command>
  buttons: Collection<string, Button>
  prefix: string
  constructor (options: SOFTandWEToptions) {
    super(options.BaseClient)
    this.commands = new Collection()
    this.buttons = new Collection()
    this.prefix = options.prefix ?? '='
  }

  async start (pswd) {
    await require(Ω(__dirname, '../config/token'))()
    this.login(process.env[pswd])
  }

  async load (D) {
    const R = '../../framework'
    const SS = await readdir(Γ(`${R}/${D}`))
    for (const S of SS) {
      const FS = await readdir(Γ(`${R}/${D}/${S}`))
      for (const F of FS.filter(f => f.endsWith('.js'))) {
        const Σ = await require(Γ(`${R}/${D}/${S}/${F}`))
        this[D].set(Σ.name, Σ)
      }
    }
  }
}
