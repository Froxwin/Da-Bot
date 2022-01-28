describe('eventHandler', () => {
  const events = []
  require('fs').readdirSync('D:/code/da-bot/out/engine/base/events')
    .forEach(Φ => {
      const δ = require(`D:/code/da-bot/out/engine/base/events/${Φ}`)
      events.push(δ)
    })
  it('should have loaded all the events', async () => {
    expect(events.length).toBe(3)
  })
})
