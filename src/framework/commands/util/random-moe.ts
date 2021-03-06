import Command = require('../../../engine/classes/command')
import { Message, MessageEmbed } from 'discord.js';
import randomanime = require('random-anime')
import { color } from '../../../engine/functions/index';

const randAnime = new Command({
  name: 'random-moe',
  alias:
    [
      'random-anime-character-generator',
      'rand-anime', 'r-anime', 'ra'
    ],
  permissions: null,
  description: 'sends the image of a random anime character',

  async execute (message: Message, _args, _command) {
    const anime = randomanime.anime();
    const embed = new MessageEmbed()
      .setImage(anime)
      .setColor(`#${color()}`)
      .setTimestamp();
    message.channel.send({ embeds: [embed] });
  }
});

export = randAnime
