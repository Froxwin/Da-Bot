const client = require('../out/engine/base/config/client')
const fs = require('fs').readdirSync
const filter = a => fs(a).filter(f => f.endsWith('.js'))

describe('commandHandler', () => {
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
  load('D:\\code\\da-bot\\out\\framework\\commands', client.commands)
  it('should have loaded all the commands', async () => {
    expect(client.commands.size).toBe(18)
  })
})
