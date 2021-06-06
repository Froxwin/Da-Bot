const { Command } = require('discord.js-commando');
const { Client, Message, MessageEmbed, TextChannel, Channel, TextBasedChannel, User, MessageAttachment, Emoji, Guild, GuildChannel, DiscordAPIError, GuildChannelManager, DMChannel } = require ('discord.js');
var randColor = Math.floor(Math.random()*16777215).toString(16);
const randomanime = require('random-anime')

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'random-cubic-equation-generator',
			aliases: ['random-cubic-equation-generator' , 'rand-cu-eq' , 'r-cu-eq' , 'r3eq' ],
			group: 'cool stuff',
			memberName: 'random-cubic-equation-generator',
			description: "sends a random cubic equation",
		});
	}

	run(message) {
        const [cmd, ...args] = message.content
        .trim()
        .split(/\s+/);
                //x^3 - (a+b+c)x^2 + (ab+bc+ca)x - abc
                var a = Math.floor(Math.random()*10);
                var b = Math.floor(Math.random()*15);
                var c = Math.floor(Math.random()*15);
                var sum = a+b+c.toString();
                var pro = a*b*c.toString();
                var sump = a*b+b*c+c*a.toString();
                var f = "x^3"
                var e = "x^2";
                var d = "x";
                message.channel.send(f + ' - ' + sum + e + ' + ' + sump + d + ' - ' + pro);
    }
}