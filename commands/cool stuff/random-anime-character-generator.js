const { Command } = require('discord.js-commando');
const { Client, Message, MessageEmbed, TextChannel, Channel, TextBasedChannel, User, MessageAttachment, Emoji, Guild, GuildChannel, DiscordAPIError, GuildChannelManager, DMChannel } = require ('discord.js');
var randColor = Math.floor(Math.random()*16777215).toString(16);
const randomanime = require('random-anime')

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'random-anime-character-generator',
			aliases: ['random-anime-character-generator' , 'rand-anime' , 'r-anime' , 'ra', 'anime girl', 'ag'],
			group: 'cool stuff',
			memberName: 'random-anime-character-generator',
			description: "sends the image of a random anime character",
		});
	}

	run(message) {
        const [cmd, ...args] = message.content
        .trim()
        .split(/\s+/);
		var randBlue = Math.floor(Math.random()*255)
		var randGreen = Math.floor(Math.random()*255)
		var color = "#"+(0).toString(16)+(randGreen).toString(16)+(randBlue).toString(16);
		const anime = randomanime.anime();
                const embed = new MessageEmbed()
                                    .setImage(anime)
                                    .setColor(color)
                                    .setTimestamp();
                message.channel.send(embed);
    }
}