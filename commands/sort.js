const { MessageEmbed } = require('discord.js')
const { oneLine } = require('common-tags')
const randBlue = Math.floor(Math.random() * 255)
const randGreen = Math.floor(Math.random() * 255)
const color = '#' + (0).toString(16) +
              (randGreen).toString(16) +
              (randBlue).toString(16)

module.exports = {

  name: 'sort',
  description: 'well its bubble sort what else can i say',

  execute (message, args) {
    try {
    // eslint-disable-next-line no-unused-vars
      const [command, ...args] = message.content
        .trim()
        .split(/\s+/)
      const argsInt = args.map((i) => Number(i))

      const bubbleSort = (arrayyy) => {
        let swapped = false

        const a = [...argsInt]

        for (let i = 1; i < a.length - 1; i++) {
          swapped = false

          for (let j = 0; j < a.length - i; j++) {
            if (a[j + 1] < a[j]) {
              ;[a[j], a[j + 1]] = [a[j + 1], a[j]]
              swapped = true
            }
          }
          const eEmbed = new MessageEmbed()
            .setTitle('Inefficient Sorting lmao')
            .setColor(color)
            .addFields(
              {
                name: 'Unsorted',
                value: oneLine`${argsInt}`,
                inline: true
              },
              {
                name: 'Sorted',
                value: oneLine`${a}`,
                inline: true
              }
            )

          if (!swapped) {
            message.channel.send({ embeds: [eEmbed] })
            return
          }
        }
        const eEmbed = new MessageEmbed()
          .setTitle('Inefficient Sorting lmao')
          .setColor('#C69B6D')
          .addFields(
            {
              name: 'Unsorted',
              value: oneLine`${argsInt}`,
              inline: true
            },
            {
              name: 'Sorted',
              value: oneLine`${a}`,
              inline: true
            }
          )
        message.channel.send({ embeds: [eEmbed] })
      }

      bubbleSort(argsInt)
    } catch (err) {

    }
  }
}
