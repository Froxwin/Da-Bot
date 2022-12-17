import { client } from '../../index.js';
import { ButtonInteraction } from 'discord.js';

client.newEvent({
  name: 'interactionCreate',
  once: false,
  async exec(button: ButtonInteraction) {
    if (!button.isButton()) return;
    client.buttons.get(button.customId)?.execute(button);
  }
});
