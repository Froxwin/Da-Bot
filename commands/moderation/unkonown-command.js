const { Command } = require('discord.js-commando');
const { Client, Message, MessageEmbed, TextChannel, Channel, TextBasedChannel, User, MessageAttachment, Emoji, Guild, GuildChannel, DiscordAPIError, GuildChannelManager, DMChannel } = require ('discord.js');
var randColor = Math.floor(Math.random()*16777215).toString(16);


module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'unknown-command',
			group: 'util',
			memberName: 'unknown-command',
			description: 'Displays help information for when an unknown command is used.',
			examples: ['unknown-command kickeverybodyever'],
			unknown: true,
			hidden: true
		});
	}

	run(message) {
		const eEmbed = new MessageEmbed()
		.setColor('#ff1100')
		.setTitle('Unknown Command')
		.setDescription(`**${message.author.tag}** Unknown command. Use ${message.anyUsage('help', message.guild ? undefined : null, message.guild ? undefined : null)} to view the command list.`)
		.setTimestamp()
		return message.channel.send(
			eEmbed
		);
	}
};
