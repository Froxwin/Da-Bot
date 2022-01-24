export = class Event {
  name: string
  once: boolean
  execute: Function
  constructor (options: {
      name: string
      once: boolean
      execute: Function
    }) {
    this.name = options.name
    this.once = options.once
    this.execute = options.execute
  }
}
