// /* eslint-disable no-new */
// import {
//   ButtonInteraction,
//   MessageComponent
// } from 'discord.js';
// import { readdir } from 'fs/promises';
// import { dirname, join as Ω } from 'path';
// import { Command } from '../../engine/SOFTandWET.js';
// import { client } from '../../index.js';
// import { fileURLToPath } from 'url';
// import { color } from '../../engine/functions/util.js';
// const _dir_ = dirname(fileURLToPath(import.meta.url));

// client.newCommand({
//   name: 'help',
//   description: 'Displays help',
//   isDmOnly: true,
//   async execute(msg, _args, _cmd) {
//     const btnArray: MessageComponent = [];
//     (await readdir(Ω(_dir_, '../'))).forEach(
//       (group) =>
//         group !== 'dev' &&
//         btnArray.push(
//           new MessageButton({
//             customId: group,
//             label: group,
//             style: 'PRIMARY'
//           })
//         )
//     );

//     msg.channel.send({
//       embeds: [
//         {
//           color: `#${color()}`,
//           title: '**Choose Category**'
//         }
//       ],
//       components: [new MessageActionRow().addComponents(btnArray)]
//     });
//   }
// });

// client.newButton({
//   name: 'util',
//   execute(button: ButtonInteraction) {
//     const arr: Command[] = [];
//     client.commands.forEach((cmd) => {
//       cmd.group === 'util' && arr.push(cmd);
//     });

//     let description = '';
//     arr.forEach((cmd) => {
//       description +=
//         '```\n' +
//         `Name: ${cmd.name}\n` +
//         `Aias: ${cmd.alias.toString()}\n` +
//         `Description: ${cmd.description}\n` +
//         `Permissions: ${cmd.permissions ?? 'none'}\n` +
//         '```';
//     });

//     button.update({
//       components: [],
//       embeds: [
//         new MessageEmbed({
//           title: '**Util**',
//           color: `#${color()}`,
//           description
//         })
//       ]
//     });
//   }
// });

// client.newButton({
//   name: 'misc',
//   execute(button: ButtonInteraction) {
//     const arr: Command[] = [];
//     client.commands.forEach((cmd) => {
//       cmd.group === 'misc' && arr.push(cmd);
//     });

//     let description = '';
//     arr.forEach((cmd) => {
//       description +=
//         '```\n' +
//         `Name: ${cmd.name}\n` +
//         `Alias: ${cmd.alias.toString()}\n` +
//         `Description: ${cmd.description}\n` +
//         `Permissions: ${cmd.permissions ?? 'none'}\n` +
//         '```';
//     });

//     button.update({
//       components: [],
//       embeds: [
//         new MessageEmbed({
//           title: '**Misc**',
//           color: `#${color()}`,
//           description
//         })
//       ]
//     });
//   }
// });
