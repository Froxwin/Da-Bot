module.exports = class Button {
/** @param {{name: string, execute: Function}} options */
  constructor (options) {
    this.name = options.name
    this.execute = options.execute
  }
}
