// @ts-check
const Event = require('../Classes/event')

const interactionCreate = new Event({
  name: 'interactionCreate',
  once: false,
  async execute (button) {
    if (!button.isButton()) return
    try {
      button.client.buttons.get(button.customId).execute(button)
    } catch (error) {
      console.error(error)
    }
  }
})

module.exports = interactionCreate
