bot = function(){
    require('dotenv').config();
    const { Client, Message, MessageEmbed, TextChannel, Channel, TextBasedChannel, User, MessageAttachment, Emoji, Guild, GuildChannel, DiscordAPIError, GuildChannelManager, DMChannel } = require ('discord.js');
    const Commando = require('discord.js-commando');
    const client = new Commando.Client({
        commandPrefix: '=',
        owner: ['627801784219336718' , '384664284401106956'],
    });
    const prefixx = "-"; 
    const path = require('path');
    const { Command } = require('discord.js-commando');
    const randomanime = require('random-anime')
    var randColor = Math.floor(Math.random()*16777215).toString(16);

    client.registry
	.registerDefaultTypes()
	.registerGroups([
		['moderation', 'Commands'],
        ['cool stuff', 'Commands'],
	])
	.registerDefaultGroups()
    .registerDefaultCommands({
		unknownCommand: false,
        help: false, 
	})
	.registerCommandsIn(path.join(__dirname, 'commands'));
    
    client.on('ready', () => {
        console.log('The bot has logged in')
    });
    
    
    client.on('message',async(message) => {
    
        if (message.channel.type === 'dm'){
            console.log(`[DM]: [${message.author.tag}]: ${message.content}`)
        }
        else{
            console.log(`[${message.guild.name}]: [${message.channel.name}]: [${message.author.tag}]: ${message.content}`)
        }
    
        //Bot Triggers 
        
        triggers = function(){
            if (message.content === 'sup shawty bae' ) {
                message.channel.send('fuck you')
            };
            if (message.content === 'hello there' ) {
                message.channel.send('general kakyoin')
            };
            if (message.content === '.bu3nds code' ) {
                message.channel.send('stupid af')
            };
            if (message.content === 'Les go' || message.content === 'les go') {
                message.channel.send('Da bebe')
            };
            if (message.content === 'kaka' || message.content === 'かか' || message.content === 'Kaka' ) {
                message.channel.send(':kekw:')
            };
            if (message.content === 'nodemon' ) {
                message.channel.send('fuck nodemon')
            };
            if (message.content === 'e') {
                const exampleEmbed = new MessageEmbed()
                                            .setColor(randColor)
                                            .setTitle('Ricked')
                                            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
                                            .setAuthor('god', 'https://static.wikia.nocookie.net/037f608a-cc92-43c6-ae3a-7f09d463b423')
                                            .setDescription('Get ricked lmao')
                                            .setTimestamp()
        
                message.channel.send(exampleEmbed);
            };
            if (message.content === 'sup' ) {
                message.channel.send('https://tenor.com/view/rick-astley-rick-roll-dancing-dance-moves-gif-14097983')
            };
            if (message.content.includes('gay') === true) {
                message.channel.send('no u')
            };
            if (message.content === 'jojo' ) {
                message.channel.send('dio')
            };
            if (message.content === 'go touch some grass' ) {
                message.channel.send('i smoke plenty grass')
            };
            if (message.content.includes('the jojo fanbase is shit') === true ) {
                message.channel.send('https://cdn.discordapp.com/attachments/840862245055234049/840864007476346910/IMG_20210506_211336_323.jpg')
            };
            /*
            if (message.content.includes('frox') === true || message.content.includes('froxwin') === true) {
                message.channel.send('*you mean **Lord Froxwin**')
            };
            */
            if (message.content.includes('new discord update') === true) {
                message.channel.send('gay')
            };
            if (message.content.includes('pucci') === true) {
                message.channel.send('https://i.ytimg.com/vi/CMOA1e2_qF0/maxresdefault.jpg')
            };
            if (message.content === 'ay') {
                const user = message.mentions.users.first();
                message.channel.send(`<@384664284401106956>hOw aRe yOu`)
            };
            if (message.content === 'attach test') {
                const attachment = new MessageAttachment('./test.png');
                message.channel.send(attachment);
            };
            if (message.content === 'burn') {
                message.delete()
                message.channel.send(` <:elmofire:743509390073528461>`)
                message.channel.send(`burn`)
            };
            if (message.author.bot === true) {
                return
            };
            if (message.content.toLowerCase === 'hello') {
                message.channel.send('hello');
            };
            if (message.content === 'banana') {
                const attachment = new MessageAttachment('./ba.png');
                message.channel.send(attachment);
            };
        }
        triggers();
    
        // Commands Walmart Version lmao
    
        if (message.content.startsWith(prefixx)) {
            const [cmd, ...args] = message.content
                                    .trim()
                                    .substring(prefixx.length)
                                    .split(/\s+/);

            if (cmd === 'brr'){
                message.delete();
                message.channel.send(` <a:brr:848564739285319700>`)
            }
            if (cmd === 'pingbu'){
                message.delete();
                message.channel.send(`<@!384664284401106956>`)
            }
            if (cmd === 'summon'){
                message.delete();
                message.channel.send(`<@!384664284401106956>`)
                const attachment = new MessageAttachment('./summon.jpg');
                message.channel.send(attachment);
            }
            /*
            if (cmd === 'emb'){
                var messsaggge = args.slice(0,args.length);
                var send = messsaggge.toString();
                var s = send.trim().replaceAll(','," ");
                const nodeHtmlToImage = require('node-html-to-image')
                //const namee = message.mentions.users.first().tag;



                const _htmlTemplate = `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                    <style>
                    body {
                        font-family: "Poppins", Arial, Helvetica, sans-serif;
                        background: rgb(112, 184, 141);
                        color: #fff;
                        max-width: 300px;
                    }
                    .app {
                        padding: 20px;
                        display: flex;
                        flex-direction: row;
                        border-top: 9px solid rgb(112, 184, 141); 
                        background: rgb(196, 88, 86);
                        align-items: center;
                    }
                    img {

                    }
                    </style>
                </head>
                <body>
                    <div class="app">
                    <img src="https://static.wikia.nocookie.net/jjba/images/9/9a/S%26WManga.png/revision/latest?cb=20190504142401" />
                    <h4>${s}</h4>
                    </div>
                </body>
                </html>
                `

                const images = await nodeHtmlToImage({
                    html: _htmlTemplate,
                    quality: 100,
                    type: 'jpeg',
                    puppeteerArgs: {
                    args: ['--no-sandbox'],
                    },
                    encoding: 'buffer',
                })

                return message.channel.send(new MessageAttachment(images, `${s}.png`))
                
            }
            */
            if (cmd === 'osu'){
                message.channel.send(`https://osu.ppy.sh/home`)
            }
        };
    })
    
    client.login(process.env.DISCORDJS_BOT_TOKEN);
    
}
bot();