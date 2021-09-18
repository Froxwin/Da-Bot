module.exports = {
  name: 'sentence',
  alias: ['s', 'rs'],
  execute (client, message, args) {
    const english =
        [
          'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
          'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ',', ' '
        ]
    for (let i = 0; i < Math.round(Math.random() * 1000); i++) {
      const index = english[Math.round(Math.random() * english.length)]
      var a
      a += index
    }
    message.channel.send(`${a.substring(9, a.length)}.`)
  }
}
