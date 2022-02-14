import { Client, ClientOptions, Collection }
  from 'discord.js'
import { readdir } from 'fs/promises'
import Command = require('./command')
import Button = require('./button')
import { join as Ω } from 'path'
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

  start (pswd) {
    require(Ω(__dirname, '../config/token'))()
    this.login(process.env[pswd])
  }

  async load (D) {
    const R = '../../framework';
    (await readdir(Γ(`${R}/${D}`)))
      .forEach(async S =>
        (await readdir(Γ(`${R}/${D}/${S}`)))
          .filter(file => file.endsWith('.js'))
          .forEach(F => {
            const Σ = require(Γ(`${R}/${D}/${S}/${F}`))
            this[D].set(Σ.name, Σ)
          })
      )
  }
}
