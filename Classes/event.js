module.exports = class Event {
  /** @param {{name: string, execute: Function, once: boolean}} options */
  constructor (options) {
    /** @property {string} name */
    this.name = options.name
    /** @property {Function} execute */
    this.execute = options.execute
    /** @property {boolean} execute */
    this.once = options.once
  }
}
