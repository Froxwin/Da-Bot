module.exports = class Button {
  /**
   * Creates a Button Interaction
   * @param {{
   *    name: string,
   *    execute: Function
   * }} options - Button config
   */
  constructor (options) {
    this.name = options.name
    this.execute = options.execute
  }
}
