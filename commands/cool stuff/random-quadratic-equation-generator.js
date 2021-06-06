const { Command } = require('discord.js-commando');
const { Client, Message, MessageEmbed, TextChannel, Channel, TextBasedChannel, User, MessageAttachment, Emoji, Guild, GuildChannel, DiscordAPIError, GuildChannelManager, DMChannel } = require ('discord.js');
var randColor = Math.floor(Math.random()*16777215).toString(16);
const randomanime = require('random-anime')

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'random-quadratic-equation-generator',
			aliases: ['random-quadratic-equation-generator' , 'rand-qu-eq' , 'r-qu-eq' , 'r2eq' ],
			group: 'cool stuff',
			memberName: 'random-quadratic-equation-generator',
			description: "sends a random quadratic equation",
		});
	}

	run(message) {
        const [cmd, ...args] = message.content
        .trim()
        .split(/\s+/);
		                //ax^2 - ex + c
						var a = Math.floor(Math.random()*10);
						var b = Math.floor(Math.random()*15);
						var sum = a+b.toString();
						var pro = a*b.toString();
						var c = "x^2";
						var d = "x";
						message.channel.send(c + ' - ' + sum + d + ' + ' + pro);
    }
}