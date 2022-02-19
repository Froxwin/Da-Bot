import Command = require('../../../engine/classes/command')
import { Message } from 'discord.js'

const directMessage = new Command({
  name: 'direct-message',
  alias: ['dm'],
  description: 'sends a direct message to the mentioned user',
  permissions: null,

  async execute (msg: Message, _args, _command) {
    // eslint-disable-next-line no-unused-vars
    const [_cmd, _ping, ...text] = msg.content
      .toLowerCase().trim().split(/\s+/)
    const user = msg.mentions.users.first()
    const member = await msg.guild!.members.fetch(user!)

    try {
      member.send(text.join(' '))
        .then(
          () => {
            msg.channel.send({
              embeds: [{
                color: '#00FF00',
                title: 'DM Sent Successfully',
                description:
                  `Successfully sent DM to <@${member.id}>`
              }]
            })
          },
          reason => {
            msg.channel.send({
              embeds: [{
                color: '#FF0000',
                title: 'DM Unsuccessful',
                description: reason.toString()
              }]
            })
          }
        )
    } catch (err: any) {
      msg.channel.send({
        embeds: [{
          color: '#FF0000',
          title: 'DM Unsuccessful',
          description: err.toString()
        }]
      })
    }
  }
})

export = directMessage
