describe('commandHandler', () => {
  const handler = path =>
    require('fs').readFileSync(path, 'utf-8')
      .split((/\r\n/g)).forEach(π => {
        process.env[π.split(/=/g)[0]] = π.split(/=/g)[1]
      })
  handler('D:/code/da-bot/.env')
  it('should have loaded all the enviornment variables',
    async () => {
      expect(process.env.SOFTundWET).toBeTruthy()
    })
})
