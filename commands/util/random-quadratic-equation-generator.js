module.exports = {

  name: 'random-quadratic-equation-generator',
  alias: ['random-quadratic-equation-generator', 'rand-qu-eq', 'r-qu-eq', 'r2eq'],
  group: 'cool stuff',
  memberName: 'random-quadratic-equation-generator',
  description: 'sends a random quadratic equation',

  execute (client, message, args) {
    // ax^2 - ex + c
    const a = Math.floor(Math.random() * 10)
    const b = Math.floor(Math.random() * 15)
    const sum = a + b.toString()
    const pro = a * b.toString()
    const c = 'x^2'
    const d = 'x'
    message.channel.send(c + ' - ' + sum + d + ' + ' + pro)
  }
}
