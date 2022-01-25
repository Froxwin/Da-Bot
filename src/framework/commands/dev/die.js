const Command = require('../../../engine/classes/command')

module.exports = new Command({
  name: 'die',
  group: 'dev',
  alias: null,
  description: null,
  permissions: null,
  async execute (message, _args, _command) {
    if (message.author.tag === 'Froxwin#2721') {
      function alloc (size) {
        const numbers = size / 8
        const arr = []
        arr.length = numbers // Simulate allocation of 'size' bytes.
        for (let Σ = 0; Σ < numbers; Σ++) {
          arr[Σ] = Σ
        }
        return arr
      }
      const allocations = []
      const ii = []
      const iii = []
      function allocToMax () {
        console.log('Start')

        const field = 'heapUsed'
        const mu = process.memoryUsage()
        console.log(mu)
        const gbStart = mu[field] / 1024 / 1024 / 1024
        console.log(`Start ${Math.round(gbStart * 100) / 100} GB`)

        const allocationStep = 1000 * 1024
        let i = 0
        let n = 0
        let m = 0
        let z = 0
        let q = 0
        while (true) {
          i++
          ii.push(i ** 2)
          n++
          ii.push(n ** 10)
          m++
          q *= i
          ii.push(m ** 100000000)
          z--
          ii.push(Math.sqrt(z / 1123))
          iii.push(q)
          iii.push((i * n * m * z) ** 8765655693993874)
          // Allocate memory.
          const allocation = alloc(allocationStep)

          // Allocate and keep a reference so the allocated memory isn't garbage collected.
          allocations.push(allocation)
          allocations.push(iii)
          allocations.push(ii)

          // Check how much memory is now allocated.
          const mu = process.memoryUsage()
          const mbNow = mu[field] / 1024 / 1024 / 1024
          // console.log(`Total allocated       ${Math.round(mbNow * 100) / 100} GB`);
          console.log(`Allocated since start ${Math.round((mbNow - gbStart) * 100) / 100} GB`)
        }
      };

      allocToMax()
      allocToMax()
      allocToMax()
      allocToMax()
    } else {
      message.channel.send('daga kotowaru')
    }
  }
})
