module.exports = {
  name: 'interactionCreate',
  async execute (button) {
    if (!button.isButton()) return
    try {
      button.client.buttons.get(button.customId).execute(button)
    } catch (error) {
      console.error(error)
    }
  }
}
