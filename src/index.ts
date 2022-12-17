import { SoftAndWet } from './engine/SOFTandWET.js';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { Partials } from 'discord.js';

readFileSync(resolve(process.cwd(), '.env'), 'utf-8')
  .split(/\r\n|\n/g)
  .forEach(π => {
    const [key, value] = π.split(/=/g);
    process.env[key] = value;
  });

export const client = new SoftAndWet({
  clientOptions: {
    intents: [
      'DirectMessageReactions',
      'DirectMessageTyping',
      'DirectMessages',
      'GuildMessageReactions',
      'GuildMessageTyping',
      'GuildMessages',
      'Guilds',
      'MessageContent'
    ],
    partials: [
      Partials.Message,
      Partials.Channel,
      Partials.GuildMember,
      Partials.Reaction,
      Partials.User
    ],
    presence: {
      status: 'idle',
      activities: [{ name: 'ur mom' }]
    }
  },
  prefix: '=',
  token: process.env.SOFTundWET!
});
