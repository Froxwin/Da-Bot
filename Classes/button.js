// @ts-check

class Button {
/**
 * Button Class
 * @param {{name: string, execute: Function}} options
 */
  constructor (options) {
    this.name = options.name
    this.execute = options.execute
  }
}

module.exports = Button
