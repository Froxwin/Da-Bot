import Command = require('../../../engine/classes/command')
import { Message } from 'discord.js';
const ban = new Command({
  name: 'ban',
  alias: null,
  description: 'bans the specified user',
  permissions: ['BAN_MEMBERS'],

  async execute (message: Message, args: Array<string>, _command: string) {
    const user = message.mentions.users.first();
    const member = await message.guild!.members.fetch(user!);
    const error = a => {
      message.channel.send({
        embeds: [{ title: 'Ban Unsuccessful', color: 0xFF0000, description: a }]
      });
    };
    // if (!ban.permCheck(message.member)) return null
    !user
      ? error('You didn\'t mention a user to ban')
      : !args[1]
          ? error('You didn\'t provide a ban duration')
          : member.ban({
            reason: message.content.replace(`=ban ${args[0]} ${args[1]}`, ''),
            days: args[1] ? undefined : parseInt(args[2])
          }).then(() => {
            message.channel.send({
              embeds: [{
                title: 'Ban Successful',
                color: 0x00FF00,
                description:
                  `<@${message.author.id}> Successfully banned <@${user.id}>`
              }]
            });
          }).catch((err) => {
            error(`${err}`);
          });
  }
});

export = ban
