import { Message, MessageActionRow, MessageButton } from 'discord.js';
import Command = require('../../../engine/classes/command')
import { color } from '../../../engine/functions';
import { readdir } from 'fs/promises';
import { join as Ω } from 'path';

const truth = new Command({
  name: 'help',
  alias: null,
  description: 'Displays help',
  permissions: null,

  async execute (msg: Message, _args: string[], _cmd) {
    const btnArray: MessageButton[] = [];
    (await readdir(Ω(__dirname, '../'))).forEach(group =>
      group !== 'dev' &&
      btnArray.push(
        new MessageButton({
          customId: group, label: group, style: 'PRIMARY'
        })
      )
    );

    msg.channel.send({
      embeds: [{
        color: `#${color()}`, title: '**Choose Category**'
      }],
      components: [
        new MessageActionRow().addComponents(btnArray)
      ]
    });
  }
});

export = truth
