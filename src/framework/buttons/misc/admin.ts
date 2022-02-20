import Button = require('../../../engine/classes/button')
import { ButtonInteraction, MessageEmbed } from 'discord.js';
import { color } from '../../../engine/functions';
import client = require('../../../engine/config/client')
import Command = require('../../../engine/classes/command')

export = new Button({
  name: 'admin',
  execute (button: ButtonInteraction) {
    const arr: Command[] = [];
    client.commands.forEach(cmd => {
      cmd.group === 'admin' && arr.push(cmd);
    });

    let description = '';
    arr.forEach(cmd => {
      description +=
        '```\n' +
        `Name: ${cmd.name}\n` +
        `Aias: ${cmd.alias.toString()}\n` +
        `Description: ${cmd.description}\n` +
        `Permissions: ${cmd.permissions.toString()}\n` +
        '```';
    });

    button.update({
      components: [],
      embeds: [
        new MessageEmbed({
          title: '**Admin**',
          color: `#${color()}`,
          description: description
        })
      ]
    });
  }
})
