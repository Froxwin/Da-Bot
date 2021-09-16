const { oneLineTrim } = require('common-tags')

module.exports = {
  name: 'randColor',
  description: 'random',
  execute () {
    const randRed = Math.floor(Math.random() * 255)
    const randGreen = Math.floor(Math.random() * 255)
    const randBlue = Math.floor(Math.random() * 255)
    const randColor = oneLineTrim`#${randRed.toString(16)}
                                   ${randBlue.toString(16)}
                                   ${randGreen.toString(16)}`
    const color = randColor
    return color
  }
}