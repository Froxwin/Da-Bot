const Event = require('../Classes/event')
const interactionCreate = new Event({
  name: 'interactionCreate',
  once: false,
  async execute (button) {
    if (!button.isButton()) return
    button.client.buttons.get(button.customId).execute(button)
  }
})

module.exports = interactionCreate
