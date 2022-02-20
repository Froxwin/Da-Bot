import Button = require('../../../engine/classes/button')
import { ButtonInteraction } from 'discord.js';

export = new Button({
  name: 'quadratic',
  execute (button: ButtonInteraction) {
    // ax² - ex + c
    const δ = Math.floor(Math.random() * 100);
    const β = Math.floor(Math.random() * 100);
    const sum = (δ + β);
    const pro = (δ * β);
    button.update({
      embeds: [],
      components: [],
      content: `\`\`\`ps\nx² - ${sum}x + ${pro} = 0\n\`\`\``
    });
  }
})
