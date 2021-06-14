const { Command } = require('discord.js-commando')

module.exports = class MeowCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'random-quadratic-equation-generator',
      aliases: ['random-quadratic-equation-generator', 'rand-qu-eq', 'r-qu-eq', 'r2eq'],
      group: 'cool stuff',
      memberName: 'random-quadratic-equation-generator',
      description: 'sends a random quadratic equation'
    })
  }

  run (message) {
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
