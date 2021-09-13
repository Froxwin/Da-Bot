const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')

module.exports = {
  name: 'justice',
  alias: 'punish',
  description: 'yes',

  async execute (client, message, args) {
    const user = message.mentions.users.first()
    if (!user) {
      const eEmbed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Justice didn\'t prevail')
        .setDescription('No one was specified to punish')

      message.channel.send({ embeds: [eEmbed] })
      return
    }
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('ban')
          .setLabel('BAN')
          .setStyle('DANGER'),
        new MessageButton()
          .setCustomId('kick')
          .setLabel('KICK')
          .setStyle('SECONDARY'),
        new MessageButton()
          .setCustomId('mute')
          .setLabel('MUTE')
          .setStyle('PRIMARY')
      )
    const eEmbed = new MessageEmbed()
      .setColor('#00FFFF')
      .setTitle('Justice 11')
      .setThumbnail('https://static.wikia.nocookie.net/jjba/images/0/03/Justice.png/revision/latest?cb=20140807091855/200/100')
      .setDescription(`Select a punishment for\n${args[0]}`)

    await message.channel.send({ embeds: [eEmbed], components: [row] })

    /*
    const selectTest = require('./test/selectTest.js') // that code from selectTest

    // uh the user
    const user = message.mentions.users.first()

    const eEmbed = new MessageEmbed()
      .setColor('#ffc0cb')
      .setTitle('Incorrect Syntax!')
      .setDescription('Please mention the user you would like to punish.')
      .setThumbnail('https://c.tenor.com/3tjdeVFZR6oAAAAC/anime-pout.gif')
      .setTimestamp()

    if (!user) return message.channel.send({ embeds: [eEmbed] })

    const eEmbed1 = new MessageEmbed()
      .setColor('#ffc0cb')
      .setTitle('Justice!')
      .setDescription(`Please Select a Punishement for **${user.tag}**.`)
      .setThumbnail('https://c.tenor.com/Am61DGzxpGoAAAAC/anime-laughing.gif')
      .setTimestamp()

    /*

    // #region Select Menu
    const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu() // uh the select menu
          .setCustomId('a')
          .setPlaceholder('No Punishment Selected')
          .setMaxValues()
          .addOptions([ // the options
            {
              label: 'Mute',
              description: `Select to Mute ${user.tag}`,
              value: 'mute' // kinda like the id
            },
            {
              label: 'Kick',
              description: `Select to Kick ${user.tag}`,
              value: 'kick' // kinda like the id
            },
            {
              label: 'Ban',
              description: `Select to Ban ${user.tag}`,
              value: 'ban' // kinda like the id
            }
          ])
      )
    // #endregion

    message.channel.send({ embeds: [eEmbed1], components: [row] }) // initial message

    const collectorSelect = message.channel.createMessageComponentCollector(
      { componentType: 'SELECT_MENU' }
    ) // the collector kinda

    collectorSelect.on('collect', async (collected) => {
      const selectedValue = collected.values[0]

      // #region mute command
      if (selectedValue === 'mute') {
        collected.reply({ content: 'message1', ephemeral: true })
      }
      // #endregion

      // #region kick command
      if (selectedValue === 'kick') { // check the value of the option you clicked thn runs the code (its an if statemnt dumbass)
        const eEmbed = new MessageEmbed() // this embed will be used in the other file
          .setColor('#ffc0cb')
          .setTitle('Kick Selected.')
          .setDescription(`Please Enter the Reason for Kicking **${user.tag}**.`)
          .setTimestamp()
          .setThumbnail('https://c.tenor.com/T-kYUqVODMkAAAAC/gif-sleepy.gif')

        // selectTest.execute()

        collected.reply({ content: 'message2', embeds: [eEmbed], ephemeral: true }) //   but  i run it in the other file it doesnt cus it undefined, so define it, like import it idk how to do it tbh but you wanted to help so yeah
      }
      // #endregion

      // #region ban command
      if (selectedValue === 'ban') {
        collected.reply({ content: 'message3', ephemeral: true })
      }
      // #endregion
    }) */
  }

}
