const { Command } = require('discord.js-commando');
const { Client, Message, MessageEmbed, TextChannel, Channel, TextBasedChannel, User, MessageAttachment, Emoji, Guild, GuildChannel, DiscordAPIError, GuildChannelManager, DMChannel } = require ('discord.js');
var randColor = Math.floor(Math.random()*16777215).toString(16);

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'purge',
			group: 'moderation',
			memberName: 'purge',
			description: 'deletes the amount if specified messages',
		});
	}

	run(message) {
        const [cmd, ...args] = message.content
        .trim()
        .split(/\s+/);

        var messageCount = args [0];
		var messageCountInt = parseInt(messageCount) 
		var messageCountFinal = messageCountInt + 1;
			
		if (!message.member.hasPermission('MANAGE_MESSAGES')){
			const eEmbed = new MessageEmbed()
									.setColor('#ff1100')
									.setTitle('Delete Unsuccessfull')
									.setDescription(`**${message.author.tag}** you dont have permission to use this command`)
									.setTimestamp()

				message.channel.send(eEmbed);
				return
		}else{
			message.channel.bulkDelete(messageCountFinal)
		}
    }
}