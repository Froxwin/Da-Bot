const { Command } = require('discord.js-commando')

module.exports = class MeowCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'bubble-sort',
      aliases: ['bs', 's'],
      group: 'cool stuff',
      memberName: 'buble-sort',
      description: 'well its bubble sort what else can i say'
    })
  }

  run (message) {
    // eslint-disable-next-line no-unused-vars
    const [cmd, ...args] = message.content
      .trim()
      .split(/\s+/)

    function swap (xp, yp) {
      const temp = args[xp]
      args[xp] = args[yp]
      args[yp] = temp
    }

    function bubbleSort (args, n) {
      let i, j
      for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
          if (args[j] > args[j + 1]) {
            swap(args, j, j + 1)
          }
        }
      }
    }

    // Function to print an array
    function printArray (args, size) {
      let i
      for (i = 0; i < size; i++) { message.channel.send(args[i] + ' ') }
    }

    const s = args.toString()

    const n = s.length
    message.channel.send('UnSorted array:')
    message.channel.send(s)

    bubbleSort(args, n)
    message.channel.send('Sorted array:')
    printArray(args, n)
  }
}
