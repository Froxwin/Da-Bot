const config = require('..\\config\\config')
const client = config.client

module.exports = {
  name: 'interactionCreate',
  async execute (button) {
    if (!button.isButton()) return
    try {
      client.buttons.get(button.customId).execute(button)
    } catch (error) {
      console.error(error)
    }
  }
}
