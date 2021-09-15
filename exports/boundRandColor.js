module.exports = {
  name: 'boundRandColor',
  description: 'randColor but with a fixed options of colors',
  execute () {
    const colorArray =
        [
          '#FF9600', '#F70F46',
          '#ECF643', '#C1FFFD',
          '#00FFFF', '#B3FF00',
          '#A9FFF4', '#5EE7A5'
        ]
    const randIndex = Math.floor(Math.random() * colorArray.length)
    const color = colorArray[randIndex]
    return color
  }
}
