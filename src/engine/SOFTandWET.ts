import {
  ButtonInteraction,
  Client,
  ClientOptions,
  Collection,
  Message,
  PermissionsString
} from 'discord.js';
import { readdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath, pathToFileURL as ptf } from 'url';
const _dir_ = dirname(fileURLToPath(import.meta.url));

export interface Command {
  name: string;
  description: string;
  alias: string[];
  permissions: PermissionsString[];
  isDmOnly: boolean;
  group: string;
  execute: (message: Message, args: string[], command: Command) => void;
}

interface Button {
  name: string;
  execute: (button: ButtonInteraction) => void;
}

export class SoftAndWet extends Client {
  commands: Collection<string, Command>;
  buttons: Collection<string, Button>;
  prefix: string;
  key: string;
  constructor(options: {
    clientOptions: ClientOptions;
    prefix: string;
    token: string;
  }) {
    super(options.clientOptions);
    this.commands = new Collection();
    this.buttons = new Collection();
    this.prefix = options.prefix;
    this.key = options.token;

    const cmdDir = join(_dir_, '../commands');
    readdirSync(cmdDir)
      .map(s => readdirSync(`${cmdDir}/${s}`).map(v => `${s}/${v}`))
      .flat()
      .filter(file => file.endsWith('.js'))
      .forEach(f => import(`${ptf(`${cmdDir}/${f}`)}`));

    const eventDir = join(_dir_, './events');
    readdirSync(eventDir)
      .filter(file => file.endsWith('.js'))
      .forEach(file => import(`${ptf(`${eventDir}/${file}`)}`));

    this.login(this.key);
  }

  newEvent(evnt: { name: string; once: boolean; exec: Function }) {
    this[evnt.once ? 'once' : 'on'](evnt.name, (...Σ) => evnt.exec(...Σ));
  }

  newCommand(options: {
    name: string;
    description?: string;
    alias?: string[];
    permissions?: PermissionsString[];
    isDmOnly?: boolean;
    execute: (message: Message, args: string[], command: Command) => void;
  }) {
    const cmdDir = join(_dir_, '../commands');
    const grp = readdirSync(cmdDir)
      .map(s => readdirSync(`${cmdDir}/${s}`).map(v => `${s}/${v}`))
      .flat()
      .filter(file => file.endsWith('.js'))
      .find(f => f.split('/')[1] === `${options.name}.js`)
      ?.split('/')[0];
    this.commands.set(options.name, {
      name: options.name,
      alias: [options.name, ...(options.alias ?? [])],
      description: options.description ?? 'No Description Provided',
      permissions: options.permissions ?? [],
      isDmOnly: options.isDmOnly ?? false,
      execute: options.execute,
      group: grp ?? ''
    });
  }

  newButton(options: Button) {
    this.buttons.set(options.name, options);
  }
}
