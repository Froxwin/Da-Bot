const fs = require('fs')

module.exports = {
  name: 'moni',
  description: 'moni lmao',
  execute (client, message, args, command) {
    message.channel.send('(beta)')
    if (!fs.existsSync(`./data/${message.author.id}.txt`)) {
      message.channel.send('New Player Detected')
      fs.open(`./data/${message.author.id}.txt`, 'w', function (err, file) {
        if (err) throw err
        console.log('Saved')
      })
      fs.writeFile(`./data/${message.author.id}.txt`, '500', async (err) => {
        if (err) throw err
        console.log('written')
      })
    } else {
      fs.readFile(`./data/${message.author.id}.txt`, 'utf8', (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(data)
        message.channel.send(`you have ${data} moni`)
      })
    }
  }
}
