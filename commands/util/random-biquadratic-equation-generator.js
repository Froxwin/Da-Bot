module.exports = {
  name: 'random-biquadratic-equation-generator',
  alias: [
    'random-biquadratic-equation-generator',
    'rand-4-eq', 'r-4-eq', 'r4eq'
  ],
  description: 'sends a random equation with degree 4',

  execute (client, message, args, command) {
    // x^4 - (a+b+c+d)x^3 + (ab+bc+ca++cd+ad+bd)x^2 - (abc+acd+bcd+abd)x +abcd
    const a = Math.floor(Math.random() * 9)
    const b = Math.floor(Math.random() * 9)
    const c = Math.floor(Math.random() * 9)
    const d = Math.floor(Math.random() * 9)
    const sum = a + b + c + d.toString()
    const pro = a * b * c * d.toString()
    const sump = a * b + b * c + c * a + c * d + a * d + b * d.toString()
    const sumq = a * b * c + a * c * d + b * c * d + a * b * d.toString()
    const p = 'x^4'
    const q = 'x^3'
    const r = 'x^2'
    const s = 'x'
    message.channel.send(
      `${p} - ${sum}${q} + ${sump}${r} - ${sumq}${s} + ${pro}`
    )
  }
}
