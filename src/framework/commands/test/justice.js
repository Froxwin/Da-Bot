// const { oneLineTrim } = require('common-tags')
// const
//   {
//     MessageActionRow,
//     MessageEmbed,
//     MessageButton
//   } = require('discord.js')

// module.exports = {
//   name: 'justice',
//   alias: 'punish',
//   description: 'yes',

//   async execute (message, args, _command) {
//     const user = message.mentions.users.first()
//     if (!user) {
//       const eEmbed = new MessageEmbed()
//         .setColor('#FF0000')
//         .setTitle('Justice didn\'t prevail')
//         .setDescription('No one was specified to punish')
//       message.channel.send({ embeds: [eEmbed] })
//     } else {
//       const row = new MessageActionRow()
//         .addComponents(
//           new MessageButton()
//             .setCustomId('ban')
//             .setLabel('BAN')
//             .setStyle('DANGER'),
//           new MessageButton()
//             .setCustomId('kick')
//             .setLabel('KICK')
//             .setStyle('SECONDARY'),
//           new MessageButton()
//             .setCustomId('mute')
//             .setLabel('MUTE')
//             .setStyle('PRIMARY')
//         )
//       const eEmbed = new MessageEmbed()
//         .setColor('#00FFFF')
//         .setTitle('Justice 11')
//         .setThumbnail(
//           oneLineTrim`https://static.wikia.nocookie.net/jjba/images/
//                   0/03/Justice.png/revision/latest?cb=201408070
//                   91855/200/100`)
//         .setDescription(`Select a punishment for\n${args[0]}`)

//       await message.channel.send({ embeds: [eEmbed], components: [row] })
//     }
//   }
// }
