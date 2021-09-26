const
  {
    MessageActionRow,
    MessageButton,
    MessageEmbed
  } = require('discord.js')

const atom = require('../../functions')
const folders = require('..\\..\\index')
module.exports = {
  name: 'help',
  alias: ['help'],

  async execute (message, args, command) {
    /*
    const row = new MessageActionRow()
    for (const folder of folders.folders) {
      row.addComponents(
        new MessageButton()
          .setCustomId(folder)
          .setLabel(folder)
          .setStyle('PRIMARY')
      )
    }
    const eEmbed = new MessageEmbed()
      .setColor(atom.color())
      .setTitle('Choose Group')
      .setDescription(
        'Please select the group you want help for'
      )
    await message.channel.send({ embeds: [eEmbed], components: [row] })
    */
    for (const [key, value] of message.client.commands) {
      console.log(value.description)
      var a
      a += `**${key}**\n\`${value.alias}\`\n\`\`\`${value.description}\`\`\`\n`
    }
    const eEmbed = new MessageEmbed()
      .setColor(atom.color())
      .setTitle('Help was provided')
      .setDescription(
      `${a}`
      )
    message.channel.send({ embeds: [eEmbed] })
  }
}
