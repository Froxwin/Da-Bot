const { oneLineTrim } = require('common-tags')
const randColor = require('./color')

module.exports =
  msg => {
    const m = msg.content.toLowerCase()
    m === 'hello there' && msg.channel.send('general kakyoin')
    m === 'ay' && msg.channel.send('<@384664284401106956>hOw aRe yOu')
    m.includes('gay') && msg.channel.send('no u')
    m === 'e' &&
      msg.channel.send({
        embeds: [{
          color: randColor(),
          title: 'Ricked',
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          author: {
            name: 'god',
            iconURL: oneLineTrim`
              https://static.wikia.nocookie.net/0
              37f608a-cc92-43c6-ae3a-7f09d463b423`
          },
          description: 'Get ricked lmao'
        }]
      })
    m === 'sup' && msg.channel.send(oneLineTrim`
        https://tenor.com/view/rick-astley-rick
        -roll-dancing-dance-moves-gif-14097983`
    )
    m === 'burn' &&
      msg.delete().then(() =>
        msg.channel.send(' <:elmofire:743509390073528461>'))
  }
