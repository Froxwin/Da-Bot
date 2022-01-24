export = class Button {
  name: string
  execute: Function
  constructor (options: {
      name: string
      execute: Function
    }) {
    this.name = options.name
    this.execute = options.execute
  }
}
