import Event = require('../classes/event')
import client = require('../config/client')
import { ButtonInteraction } from 'discord.js';

const interactionCreate = new Event({
  name: 'interactionCreate',
  once: false,
  async execute (button: ButtonInteraction) {
    if (!button.isButton()) return;
    client.buttons.get(button.customId)?.execute(button);
  }
});

export = interactionCreate
