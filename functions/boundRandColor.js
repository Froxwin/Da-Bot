module.exports =
  () => {
    const colorArray =
        [
          '#FF9600', '#F70F46', '#ECF643', '#C1FFFD',
          '#00FFFF', '#B3FF00', '#A9FFF4', '#5EE7A5',
          '#2F3136', '#3D3751', '#EB500D', '#7D100C',
          '#461317', '#91C9E0', '#F4EBEC', '#ED8964',
          '#FBFF91', '#F2B8C8', '#FF6C6F', '#D6FFA7',
          '#BE6555', '#648C82'
        ]
    const randIndex = Math.floor(Math.random() * colorArray.length)
    const color = colorArray[randIndex]
    return color
  }
