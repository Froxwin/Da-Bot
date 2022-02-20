import Button = require('../../../engine/classes/button')
import { ButtonInteraction } from 'discord.js';

export = new Button({
  name: 'linear',
  execute (button: ButtonInteraction) {
    // ax + c =  0
    const δ = Math.floor(Math.random() * 10);
    const β = Math.floor(Math.random() * 100);
    button.update({
      embeds: [],
      components: [],
      content: `\`\`\`ps\n${δ}x + ${β} = 0\n\`\`\``
    });
  }
})
