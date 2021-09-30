// @ts-check
const { Client, Collection } = require('discord.js')

class SOFTandWET extends Client {
  /**
   * @param {{
   *    BaseClient: import('discord.js').ClientOptions,
   *    commands: Collection<string, import('../Classes/command')>,
   *    buttons: Collection<string, import('../Classes/button')>}} options
   */
  constructor (options) {
    super(options.BaseClient)
    this.commands = options.commands
    this.buttons = options.buttons
  }
}

const client = new SOFTandWET(
  {
    BaseClient:
    {
      intents:
        [
          'DIRECT_MESSAGE_REACTIONS',
          'DIRECT_MESSAGE_TYPING',
          'DIRECT_MESSAGES',
          'GUILD_MESSAGE_TYPING',
          'GUILDS', 'GUILD_MESSAGES',
          'GUILD_BANS', 'GUILD_WEBHOOKS',
          'GUILD_EMOJIS_AND_STICKERS',
          'GUILD_MEMBERS'
        ],
      partials:
        [
          'MESSAGE', 'CHANNEL', 'REACTION', 'REACTION', 'USER',
          'GUILD_MEMBER'
        ],
      presence:
        {
          status: 'idle',
          activities:
          [
            {
              name: 'ur mom',
              type: 'PLAYING'
            }
          ]
        }
    },
    commands: new Collection(),
    buttons: new Collection()
  }
)

module.exports = client
