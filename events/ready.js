// @ts-check
const { oneLineTrim } = require('common-tags')
const colors = require('colors')
const fs = require('fs')
const Event = require('../Classes/event')

const ready = new Event({
  name: 'ready',
  once: true,
  async execute (client) {
    if (client.readyAt.getHours() > 12) {
      console.log(
        colors.bold(oneLineTrim`
            \x07
            \u001b[38;2;14;249;254m
            \u001b[48;2;14;249;254m
            \u001b[38;2;28;28;28m
            @${client.user.tag} has logged in at 
            ${client.readyAt.getHours() - 12}:
            ${client.readyAt.getMinutes()}:
            ${client.readyAt.getSeconds()} pm
            \u001b[0m
            \u001b[38;2;14;249;254m
            \u001b[0m
          `)
      )
      fs.appendFile(
        'D:\\Non-Indexed\\Da-Bot\\logs\\loginLogs.log',
        `@${client.user.tag} has logged in at ${client.readyAt.getHours() - 12}:${client.readyAt.getMinutes()}:${client.readyAt.getSeconds()} pm\n`,
        (err) => { if (err) { console.log(err) } }
      )
    } else {
      console.log(
        colors.bold(oneLineTrim`
            \u001b[38;2;14;249;254m
            \u001b[48;2;14;249;254m
            \u001b[38;2;28;28;28m
            @${client.user.tag} has logged in at 
            ${client.readyAt.getHours()}:
            ${client.readyAt.getMinutes()}:
            ${client.readyAt.getSeconds()} am
            \u001b[0m
            \u001b[38;2;14;249;254m
            \u001b[0m
          `)
      )
      fs.appendFile(
        'D:\\Non-Indexed\\Da-Bot\\logs\\loginLogs.log',
        `@${client.user.tag} has logged in at ${client.readyAt.getHours()}:${client.readyAt.getMinutes()}:${client.readyAt.getSeconds()} am\n`,
        (err) => { if (err) { console.log(err) } }
      )
    }
  }
})

module.exports = ready
