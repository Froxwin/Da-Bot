const { Command } = require('discord.js-commando');
const { Client, Message, MessageEmbed, TextChannel, Channel, TextBasedChannel, User, MessageAttachment, Emoji, Guild, GuildChannel, DiscordAPIError, GuildChannelManager, DMChannel } = require ('discord.js');
var randColor = Math.floor(Math.random()*16777215).toString(16);

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'direct-message',
			aliases: ['direct-message' , 'dm'],
			group: 'cool stuff',
			memberName: 'direct-message',
			description: "sends a dorect message to the mentioned user",
		});
	}

	run(message) {
        const [cmd, ...args] = message.content
                                    .trim()
                                    .split(/\s+/);
        var messsaggge = args.slice(1,args.length);
        var send = messsaggge.toString();
        var s = send.trim().replaceAll(','," ");
        var randBlue = Math.floor(Math.random()*255)
		var randGreen = Math.floor(Math.random()*255)
		var color = "#"+(0).toString(16)+(randGreen).toString(16)+(randBlue).toString(16);

		const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member){
                if (message.mentions.users.first().bot === true) {
                    const eEmbed = new MessageEmbed()
                                        .setColor('#ff1100')
                                        .setTitle('DM Unsuccessfull')
                                        .setDescription(`${message.author.tag} I can not send a DM to a bot`)
                                        .setTimestamp()
                    message.channel.send(eEmbed)
                    return
                }else{
                    if(s.length === 0){
                        const eEmbed = new MessageEmbed()
                                        .setColor('#ff1100')
                                        .setTitle('DM sent Unsuccessfully')
                                        .setDescription(`I cannot send a empty DM`)
                                        .setTimestamp()
        
                    message.channel.send(eEmbed)
                    }
                    else{
                        var messsaggge = args.slice(1,args.length);
                        var send = messsaggge.toString();
                        var s = send.trim().replaceAll(','," ");
                        user.send(s)
                        const eEmbed = new MessageEmbed()
                                            .setColor('#00ff04')
                                            .setTitle('DM sent successfully')
                                            .setDescription(`Successfully sent DM to ${user.tag}`)
                                            .setTimestamp()
            
                        message.channel.send(eEmbed)
                    }
                }
            }else{
                const eEmbed = new MessageEmbed()
                                                    .setColor('#ff1100')
                                                    .setTitle('Ban Unsuccessfull')
                                                    .setDescription(`**${message.author.tag}** That user isn't in this guild! `)
                                                    .setTimestamp()
            
                                message.channel.send(eEmbed);
            }
        }else{
            const eEmbed = new MessageEmbed()
                                .setColor('#ff1100')
                                .setTitle('DM Unsuccessfull')
                                .setDescription(`**${message.author.tag}** You didn't mention the user to DM! `)
                                .setTimestamp()

            message.channel.send(eEmbed);
        }
    }
}