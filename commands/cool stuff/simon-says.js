const { Command } = require('discord.js-commando');
const { Client, Message, MessageEmbed, TextChannel, Channel, TextBasedChannel, User, MessageAttachment, Emoji, Guild, GuildChannel, DiscordAPIError, GuildChannelManager, DMChannel } = require ('discord.js');
var randColor = Math.floor(Math.random()*16777215).toString(16);
const prefix = import ('../../index.js')



module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'simon-says',
			aliases: ['simon-says' , 'say'],
			group: 'cool stuff',
			memberName: 'simon-says',
			description: "says what you want me to say",
		});
	}

	run(message) {
        const [cmd, ...args] = message.content
        .trim()
        .split(/\s+/);
		message.delete()
		var messsaggge = args.slice(0,args.length);
		var send = messsaggge.toString();
		var s = send.trim().replaceAll(','," ");
		message.channel.send(s)
    }
}