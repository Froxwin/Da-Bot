const { MessageEmbed } = require('discord.js')
const atom = require('../../functions')
const fs = require('fs')

module.exports = {
  name: 'admin',

  execute (button) {
    const eEmbed = new MessageEmbed()
      .setColor(atom.color())
      .setDescription(
        'Admin help was selected'
      )
    button.update({ embeds: [eEmbed], components: [] })
    button.followUp('yes')
    const commandFiles =
    fs.readdirSync('D:\\Non-Indexed\\Da-Bot\\commands\\admin')
      .filter(file => file.endsWith('.js'))
    for (button.client.commands of commandFiles) {
      console.log(button.client.commands)
    }
  }
}
