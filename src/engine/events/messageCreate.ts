import { client } from '../../index.js';
import { ChannelType, Message } from 'discord.js';
import { rainbow } from '../util.js';

client.newEvent({
  name: 'messageCreate',
  once: false,
  async exec(msg: Message) {
    console.log(`[${msg.author}]${rainbow(msg.content)}`);

    const regex = RegExp(`^${client.prefix}|^<@${client.user?.id}>`);
    if (msg.author.bot || !msg.content.match(regex)) return;

    const [command, ...args] = msg.content
      .trim()
      .substring(msg.content.match(regex)?.length!)
      .split(/\s+/g);

    const cmdx = client.commands.find(cmd => cmd.alias.includes(command));
    if (!cmdx) return;
    if (msg.channel.type === ChannelType.DM && !cmdx?.isDmOnly) {
      await msg.reply(
        `The \`${cmdx.name}\` command is not available in DMs`
      );
      return;
    }

    cmdx.execute(msg, args, cmdx);
  }
});
