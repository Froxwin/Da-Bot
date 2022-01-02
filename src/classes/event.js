module.exports = class Event {
  /**
   * Creates an Event Listener
   * @param {{
   *    name: string,
   *    once: boolean,
   *    execute: Function,
   *  }} options - Event Listener config
   */
  constructor (options) {
    this.name = options.name
    this.execute = options.execute
    this.once = options.once
  }
}
