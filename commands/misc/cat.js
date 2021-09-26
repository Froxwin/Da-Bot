const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
const Command = require('../../Classes/command')

module.exports = new Command({
  name: 'cat',
  async execute (client, message, args, command) {
    const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json())
    message.channel.send({ files: [file] })
  }
})
