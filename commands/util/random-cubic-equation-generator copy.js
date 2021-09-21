module.exports = {
  name: 'random-cubic-equation-generator',
  alias: [
    'random-cubic-equation-generator',
    'rand-cu-eq', 'r-cu-eq', 'r3eq'
  ],
  description: 'sends a random cubic equation',

  execute (client, message, args, command) {
    // x^3 - (a+b+c)x^2 + (ab+bc+ca)x - abc
    const a = Math.floor(Math.random() * 10)
    const b = Math.floor(Math.random() * 15)
    const c = Math.floor(Math.random() * 15)
    const sum = a + b + c.toString()
    const pro = a * b * c.toString()
    const sump = a * b + b * c + c * a.toString()
    const f = 'x^3'
    const e = 'x^2'
    const d = 'x'
    message.channel.send(`${f} - ${sum}${e} + ${sump}${d} - ${pro}`)
  }
}
