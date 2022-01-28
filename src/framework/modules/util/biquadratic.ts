import Button = require('../../../engine/base/classes/button')
import { ButtonInteraction } from 'discord.js'

export = new Button({
  name: 'biquadratic',
  execute (button: ButtonInteraction) {
    // x⁴ - (a+b+c+d)x³ + (ab+bc+ca++cd+ad+bd)x² - (abc+acd+bcd+abd)x +abcd
    const a = Math.floor(Math.random() * 25)
    const b = Math.floor(Math.random() * 25)
    const c = Math.floor(Math.random() * 25)
    const d = Math.floor(Math.random() * 25)
    const sum = (a + b + c + d)
    const pro = (a * b * c * d)
    const sump = (a * b + b * c + c * a + c * d + a * d + b * d)
    const sumq = (a * b * c + a * c * d + b * c * d + a * b * d)
    button.update({
      embeds: [],
      components: [],
      content:
        `\`\`\`ps\nx⁴ - ${sum}x³ + ${sump}x² - ${sumq}x + ${pro} = 0\n\`\`\``
    })
  }
})
