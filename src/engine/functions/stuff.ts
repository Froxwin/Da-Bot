import { oneLineTrim } from 'common-tags'
import randColor = require('./color')

export = msg => {
  const m = msg.content.toLowerCase()
  const Γ = content => msg.channel.send(content)

  m === 'hello there' && Γ('general kakyoin')
  m === 'ay' && Γ('<@384664284401106956>hOw aRe yOu')
  m === 'sup' &&
    Γ(oneLineTrim`
      https://tenor.com/view/rick-astley-rick
      -roll-dancing-dance-moves-gif-14097983`
    )
  m === 'burn' &&
    msg.delete().then(() =>
      Γ('<:elmofire:743509390073528461>')
    )
  m === 'e' &&
    Γ({
      embeds: [{
        color: randColor(),
        title: 'Ricked',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        description: 'Get ricked lmao',
        author: {
          name: 'god',
          iconURL: oneLineTrim`
            https://static.wikia.nocookie.net/0
            37f608a-cc92-43c6-ae3a-7f09d463b423`
        }
      }]
    })
}
