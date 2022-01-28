interface ButtonOptions {
  name: string,
  execute: Function
}

export = class Button {
  name: string
  execute: Function
  constructor (options: ButtonOptions) {
    this.name = options.name
    this.execute = options.execute
  }
}
