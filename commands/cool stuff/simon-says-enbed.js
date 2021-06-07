const { Command } = require('discord.js-commando');
const { Client, Message, MessageEmbed, TextChannel, Channel, TextBasedChannel, User, MessageAttachment, Emoji, Guild, GuildChannel, DiscordAPIError, GuildChannelManager, DMChannel,MessageCollector } = require ('discord.js');
var randColor = Math.floor(Math.random()*16777215).toString(16);
const prefix = import ('../../index.js')



module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'simon-says-embed',
			aliases: ['embed-says', 'es'],
			group: 'cool stuff',
			memberName: 'simon-says-embed',
			description: "says what you want me to say",
		});
	}



	run(message) {
        const [cmd, ...args] = message.content
        .trim()
        .split(/\s+/);
		//message.delete()
		var messsaggge = args.slice(0,args.length);
		var send = messsaggge.toString();
		var s = send.trim().replaceAll(','," ");

		message.channel.awaitMessages(m => m.author.id == message.author.id,
		{ max: 1, time: 30000 }).then(collected => {
			// only accept messages by the user who sent the command
			// accept only 1 message, and return the promise after 30000ms = 30s

			// first (and, in this case, only) message of the collection
			const [cmd, ...arg] = collected.first().content
									.trim()
									.split(/\s+/);
				var messsagggee = arg.slice(0,arg.length);
				var send = messsagggee.toString();
				var b = send.trim().replaceAll(','," ");

				const eEmbed = new MessageEmbed()
									.setColor(randColor)
									.setTitle(b)
									.setDescription(s)
				message.channel.send(eEmbed);


	
		})
	}
}