const { Command } = require('discord.js-commando');
const { Client, Message, MessageEmbed, TextChannel, Channel, TextBasedChannel, User, MessageAttachment, Emoji, Guild, GuildChannel, DiscordAPIError, GuildChannelManager, DMChannel } = require ('discord.js');
var randColor = Math.floor(Math.random()*16777215).toString(16);

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'ban',
			group: 'moderation',
			memberName: 'ban',
			description: 'bans the specified user',
		});
	}

	run(message) {
        const [cmd, ...args] = message.content
        .trim()
        .split(/\s+/);
		const user = message.mentions.users.first();
                if (user) {
                const member = message.guild.member(user);
                    if (member.roles.highest.position >= message.member.roles.highest.position) {
                        const eEmbed = new MessageEmbed()
                                                    .setColor('#ff1100')
                                                    .setTitle('Ban Unsuccessfull')
                                                    .setDescription(`**${message.author.tag}** you are not high enough in the hierchy to do that`)
                                                    .setTimestamp()
        
                                message.channel.send(eEmbed);
                        return
                    }
                    else{
                        if (!message.member.hasPermission('BAN_MEMBERS')) {
                            const eEmbed = new MessageEmbed()
                                                    .setColor('#ff1100')
                                                    .setTitle('Ban Unsuccessfull')
                                                    .setDescription(`**${message.author.tag}** you dont have permission to use this command`)
                                                    .setTimestamp()
        
                                message.channel.send(eEmbed);
                            return
                        }else{
                            if (member) {
                                member
                                .ban({reason: args[1]})
                                .then(() => {
                                    const eEmbed = new MessageEmbed()
                                                        .setColor('#00ff04')
                                                        .setTitle('Ban Successfull')
                                                        .setDescription(`**${message.author.tag}** Successfully banned ${user.tag} `)
                                                        .setTimestamp()
            
                                    message.channel.send(eEmbed);
                                })
                                .catch(err => {
                                    const eEmbed = new MessageEmbed()
                                                        .setColor('#ff1100')
                                                        .setTitle('Ban Unsuccessfull')
                                                        .setDescription(`**${message.author.tag}** I was unable to ban ${user.tag} `)
                                                        .setTimestamp()
            
                                    message.channel.send(eEmbed);
                                    console.error(err);
                                });
                            } else {
                                const eEmbed = new MessageEmbed()
                                                    .setColor('#ff1100')
                                                    .setTitle('Ban Unsuccessfull')
                                                    .setDescription(`**${message.author.tag}** That user isn't in this guild! `)
                                                    .setTimestamp()
            
                                message.channel.send(eEmbed);
                            }
                        }
            
                    
                    }
                } else {
                    const eEmbed = new MessageEmbed()
                                        .setColor('#ff1100')
                                        .setTitle('Ban Unsuccessfull')
                                        .setDescription(`**${message.author.tag}** You didn't mention the user to ban! `)
                                        .setTimestamp()

                    message.channel.send(eEmbed);
                }

                
    

	}
};