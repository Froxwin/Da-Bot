interface EventOptions {
  name: string
  once: boolean
  execute: Function
}

export = class Event {
  name: string
  once: boolean
  execute: Function
  constructor (options: EventOptions) {
    this.name = options.name;
    this.once = options.once;
    this.execute = options.execute;
  }
}
