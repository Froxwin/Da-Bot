const { Command } = require('discord.js-commando');
const { Client, Message, MessageEmbed, TextChannel, Channel, TextBasedChannel, User, MessageAttachment, Emoji, Guild, GuildChannel, DiscordAPIError, GuildChannelManager, DMChannel } = require ('discord.js');
var randColor = Math.floor(Math.random()*16777215).toString(16);

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'mention',
			group: 'cool stuff',
			memberName: 'mention',
			description: "pings the message author",
		});
	}

	run(message) {
        const [cmd, ...args] = message.content
        .trim()
        .split(/\s+/);
		message.channel.send(`<@!${message.author.id}>`)
    }
}