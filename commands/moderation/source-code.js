const { Command } = require('discord.js-commando');
const { Client, Message, MessageEmbed, TextChannel, Channel, TextBasedChannel, User, MessageAttachment, Emoji, Guild, GuildChannel, DiscordAPIError, GuildChannelManager, DMChannel } = require ('discord.js');
var randColor = Math.floor(Math.random()*16777215).toString(16);

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'source-code',
			aliases: ['source-code' , 'src-code' , 'sc'],
			group: 'cool stuff',
			memberName: 'source-code',
			description: "shows my insides",
		});
	}

	run(message) {
        const [cmd, ...args] = message.content
        .trim()
        .split(/\s+/);
		message.channel.send(`So you want to see me naked <:bot:849669570604171295>`)
                const attachment = new MessageAttachment('./index.js');
                message.channel.send(attachment);
    }
}