class Command {
  /**
 * @param {Object} options The command's configuration
 */
  constructor (options) {
    this.config =
    {
      name: options.name,
      description: options.description,
      alias: options.alias,
      group: options.group,
      permissions: options.permissions
    }
  }
}

module.exports = Command
