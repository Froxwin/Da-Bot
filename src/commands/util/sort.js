const Command = require('../../classes/command')

const sort = new Command({
  name: 'sort',
  permissions: null,
  group: 'util',
  alias: null,
  description: null,
  /**
  * @param {import('discord.js').Message} message
  * @param {Array<string>} args
  * @param {Command} command
  * @returns void | null
  */
  execute (message, args, command) {
    console.log('\x1b[32m' + 'Sortin' + '\x1b[0m\n')
    const array = [23, 32414, 14, 241, 4, 0, 2, -21]
    for (let o = 0; o < array.length; o++) {
      let p = o + 1
      if (array[o] > array[p]) {
        for (let i = 0; i < array.length; i++) {
          let n = i + 1
          if (array[i] > array[n]) {
            let a = array[i]
            let b = array[n]
            array[n] = a
            array[i] = b
          }
        }
      }
    }
    console.log(array)
  }
})

module.exports = sort
