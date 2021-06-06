const { Command } = require('discord.js-commando');

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'hello',
			group: 'cool stuff',
			memberName: 'hello',
			description: 'Replies with a hello',
		});
	}

	run(message) {
		message.channel.send('Hello World')
	}
};