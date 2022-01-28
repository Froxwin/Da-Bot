import { Client, ClientOptions, Collection } from 'discord.js'
import Command = require('./command')
import Button = require('./button')

interface SOFTandWEToptions {
  BaseClient: ClientOptions
  commands: Collection<string, Command>
  buttons: Collection<string, Button>
  prefix: string
  load: Function
}

export = class SOFTandWET extends Client {
  commands: Collection<string, Command>
  buttons: Collection<string, Button>
  prefix: string
  load: Function
  constructor (options: SOFTandWEToptions) {
    super(options.BaseClient)
    this.commands = options.commands
    this.buttons = options.buttons
    this.prefix = options.prefix ?? '='
    this.load = options.load
  }
}
