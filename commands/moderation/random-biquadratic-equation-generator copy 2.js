const { Command } = require('discord.js-commando');
const { Client, Message, MessageEmbed, TextChannel, Channel, TextBasedChannel, User, MessageAttachment, Emoji, Guild, GuildChannel, DiscordAPIError, GuildChannelManager, DMChannel } = require ('discord.js');
var randColor = Math.floor(Math.random()*16777215).toString(16);
const randomanime = require('random-anime')

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'random-biquadratic-equation-generator',
			aliases: ['random-biquadratic-equation-generator' , 'rand-4-eq' , 'r-4-eq' , 'r4eq' ],
			group: 'cool stuff',
			memberName: 'random-biquadratic-equation-generator',
			description: "sends a random equation with degree 4",
		});
	}

	run(message) {
        const [cmd, ...args] = message.content
        .trim()
        .split(/\s+/);
                //x^4 - (a+b+c+d)x^3 + (ab+bc+ca++cd+ad+bd)x^2 - (abc+acd+bcd+abd)x +abcd
                var a = Math.floor(Math.random()*9);
                var b = Math.floor(Math.random()*9);
                var c = Math.floor(Math.random()*9);
                var d = Math.floor(Math.random()*9);
                var sum = a+b+c+d.toString();
                var pro = a*b*c*d.toString();
                var sump = a*b+b*c+c*a+c*d+a*d+b*d.toString();
                var sumq = a*b*c+a*c*d+b*c*d+a*b*d.toString();
                var p = "x^4"
                var q = "x^3"
                var r = "x^2";
                var s = "x";
                message.channel.send(p + ' - ' + sum + q + ' + ' + sump + r + ' - ' + sumq + s + ' + ' + pro );
    }
}