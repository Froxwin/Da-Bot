const { Command } = require('discord.js-commando');
const { Client, Message, MessageEmbed, TextChannel, Channel, TextBasedChannel, User, MessageAttachment, Emoji, Guild, GuildChannel, DiscordAPIError, GuildChannelManager, DMChannel } = require ('discord.js');


module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'rate',
			group: 'cool stuff',
            aliases: ['rate'],
			memberName: 'rate',
			description: 'Rates stuff',
		});
	}

	run(message) {
        const [cmd, ...args] = message.content
        .trim()
        .split(/\s+/);

        if (args.length === 0) {
            message.channel.send("provide arguments");
			return
        };
		const randColor = Math.floor(Math.random()*16777215).toString(16);
		var randBlue = Math.floor(Math.random()*255)
		var randGreen = Math.floor(Math.random()*255)
		var color = "#"+(0).toString(16)+(randGreen).toString(16)+(randBlue).toString(16);
        var x = Math.floor(Math.random() * 10);
        var messsaggge = args.slice(0,args.length);
		var send = messsaggge.toString();
		var s = send.trim().replaceAll(','," ");

        const eEmbed = new MessageEmbed()
							.setColor(color)
							.setTitle(`${x}/10`)
							.setDescription(`${message.author} I'd rate ${s} a ${x}/10`)
							.setTimestamp()

		message.channel.send(eEmbed)

    }
}