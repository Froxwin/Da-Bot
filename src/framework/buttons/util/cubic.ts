import Button = require('../../../engine/classes/button')
import { ButtonInteraction } from 'discord.js';

export = new Button({
  name: 'cubic',
  execute (button: ButtonInteraction) {
    // x³ - (a+b+c)x² + (ab+bc+ca)x - abc
    const δ = Math.floor(Math.random() * 50);
    const β = Math.floor(Math.random() * 50);
    const λ = Math.floor(Math.random() * 50);
    const sum = (δ + β + λ);
    const pro = (δ * β * λ);
    const sump = ((δ * β) + (β * λ) + (λ * δ));
    button.update({
      embeds: [],
      components: [],
      content:
        `\`\`\`ps\nx³ - ${sum}x² + ${sump}x - ${pro} = 0\n\`\`\``
    });
  }
})
