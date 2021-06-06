const { Command } = require('discord.js-commando');
const { Client, Message, MessageEmbed, TextChannel, Channel, TextBasedChannel, User, MessageAttachment, Emoji, Guild, GuildChannel, DiscordAPIError, GuildChannelManager, DMChannel } = require ('discord.js');
var randColor = Math.floor(Math.random()*16777215).toString(16);

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'sus',
			group: 'cool stuff',
			memberName: 'sus',
			description: 'fights you',
		});
	}

	run(message) {
        const [cmd, ...args] = message.content
        .trim()
        .split(/\s+/);
		var randBlue = Math.floor(Math.random()*255)
		var randGreen = Math.floor(Math.random()*255)
		var color = "#"+(0).toString(16)+(randGreen).toString(16)+(randBlue).toString(16);
		const eEmbed = new MessageEmbed()
							.setColor(color)
							.setTitle('SUS')
							.setDescription(`**${message.mentions.users.first()} IS KINDA SUS NGL**`)
							.setTimestamp()

		message.channel.send(eEmbed)

    }
}