module.exports =
  (client) => {
    client.on('interactionCreate',
      async (button) => {
        if (!button.isButton()) return
        try {
          client.buttons.get(button.customId).execute(button)
        } catch (error) {
          console.error(error)
        }
      }
    )
  }
