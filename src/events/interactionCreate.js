const Event = require('../classes/event')

const interactionCreate = new Event({
  name: 'interactionCreate',
  once: false,
  /**
   * @param {import('discord.js').ButtonInteraction} button
   */
  async execute (button) {
    if (!button.isButton()) return
    button.client.buttons.get(button.customId).execute(button)
  }
})

module.exports = interactionCreate
