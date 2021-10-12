const { Client } = require('discord.js')

class SOFTandWET extends Client {
  /**
   * @param {{
   *    BaseClient:
   *        import('discord.js')
   *            .ClientOptions,
   *    commands:
   *        import('discord.js')
   *            .Collection<string, import('../Classes/command')>,
   *    buttons:
   *        import('discord.js')
   *            .Collection<string, import('../Classes/button')>
   * }} options
   */
  constructor (options) {
    super(options.BaseClient)
    this.commands = options.commands
    this.buttons = options.buttons
  }
}

module.exports = SOFTandWET
