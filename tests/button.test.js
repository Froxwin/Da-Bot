const client = require('../out/engine/base/config/client')
const fs = require('fs').readdirSync
const filter = a => fs(a).filter(f => f.endsWith('.js'))

describe('buttonHandler', () => {
  const load = (dir, collec) =>
    fs(`${dir}`)
      .forEach(folder =>
        filter(`${dir}\\${folder}`)
          .forEach(file => collec.set(
            require(
              `${dir}\\` +
              `${folder}\\${file}`
            ).name,
            require(
              `${dir}\\` +
              `${folder}\\${file}`
            )
          )))
  load('D:\\code\\da-bot\\out\\framework\\modules', client.buttons)
  it('should have loaded all the buttons', async () => {
    expect(client.buttons.size).toBe(8)
  })
})
