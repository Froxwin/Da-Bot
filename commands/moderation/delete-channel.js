const { Command } = require('discord.js-commando');
const { MessageEmbed } = require ('discord.js');
var randColor = Math.floor(Math.random()*16777215).toString(16);

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'delete-channel',
			group: 'moderation',
			memberName: 'delete-channel',
			description: 'Deletes the channel in which the command is called',
		});
	}

	run(message) {
        const [cmd, ...args] = message.content
        .trim()
        .split(/\s+/);
		var member = message.author
		if (!message.member.hasPermission('MANAGE_CHANNELS')) {
			const eEmbed = new MessageEmbed()
									.setColor('#ff1100')
									.setTitle('Delete Unsuccessfull')
									.setDescription(`**${message.author.tag}** you dont have permission to use this command`)
									.setTimestamp()

				message.channel.send(eEmbed);
		}else{
			message.channel.delete();
		}
    }
}