// import { Message, MessageActionRow, MessageButton } from 'discord.js';
// import { color } from '../../engine/functions/util.js';
// import { client } from '../../index.js';

// client.newCommand({
//   name: 'rand-color',
//   alias: ['rc', 'color'],
//   description: 'rand-color in all its glory',
//   isDmOnly: true,
//   async execute(message: Message, _args, _command) {
//     const chroma = color();
//     await message.channel.send({
//       embeds: [{ color: `#${chroma}`, title: chroma }],
//       components: [
//         new MessageActionRow().addComponents(
//           new MessageButton({
//             customId: 'color',
//             label: 'again?',
//             style: 'PRIMARY'
//           })
//         )
//       ]
//     });

//     client.newButton({
//       name: 'color',
//       execute(button) {
//         const chroma = color();
//         button.update({
//           embeds: [{ color: `#${chroma}`, title: chroma }]
//         });
//       }
//     });
//   }
// });
