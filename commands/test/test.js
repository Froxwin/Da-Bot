const Command = require('..\\..\\config\\command')
const options =
{
  name: 'test',
  description: 'A simple test command or smth idk',
  alias: ['t', 'a'],
  group: 'Test',
  permissions: ['NONE']
}
class test extends Command {
  constructor () { super(options) }

  execute (client, message, args, command) {
    message.channel.send('get nae nae\'d')
    console.log(test.prototype.config)
  }
}
module.exports = test
