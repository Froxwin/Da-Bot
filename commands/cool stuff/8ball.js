const { Command } = require('discord.js-commando');
const { Client, Message, MessageEmbed, TextChannel, Channel, TextBasedChannel, User, MessageAttachment, Emoji, Guild, GuildChannel, DiscordAPIError, GuildChannelManager, DMChannel } = require ('discord.js');
var randColor = Math.floor(Math.random()*16777215).toString(16);

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'truth',
			group: 'cool stuff',
            aliases: ['8ball', 'truth'],
			memberName: 'truth',
			description: 'magic 8 ball',
		});
	}

	run(message) {
        const [cmd, ...args] = message.content
        .trim()
        .split(/\s+/);

        if (args.length === 0) {
            message.channel.send("provide arguments");
        };
        var x = Math.floor(Math.random() * 2);
        if (args.length !== 0 && x === 0){
            message.channel.send('Yes');
        };
        if (args.length !== 0 && x === 1){
            message.channel.send('No');
        };
        if (args.length !== 0 && x === 2){
            message.channel.send('Perhaps');
        };

    }
}