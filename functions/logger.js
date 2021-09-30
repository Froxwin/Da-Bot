// @ts-check
const { oneLineTrim } = require('common-tags')
const colors = require('colors')
const fs = require('fs')

module.exports =
  (message) => {
    if (message.channel.type === 'DM') {
      console.log(
        colors.bold(oneLineTrim`
          \u001b[38;2;255;71;156m
          \u001b[48;2;255;71;156m[
          \u001b[38;2;255;255;255mDM
          \u001b[38;2;255;71;156m]
          \u001b[48;2;121;241;247m
          \u001b[38;2;121;241;247m[
          \u001b[38;2;0;0;0m${message.author.tag}
          \u001b[38;2;121;241;247m]
          \u001b[48;2;28;28;28m
          \u001b[38;2;121;241;247m 
          \u001b[48;2;28;28;28m${colors.rainbow(message.content)}
          \u001b[38;2;28;28;28m]
          \u001b[0m
          \u001b[38;2;28;28;28m
          \u001b[0m`
        )
      )
      fs.appendFile(
        'D:\\Non-Indexed\\Da-Bot\\logs\\logs.log',
        `[DM]:[${message.author.tag}]: ${message.content}\n`,
        (err) => { if (err) { console.log(err) } }
      )
    } else {
      console.log(
        colors.bold(oneLineTrim`
          \u001b[38;2;255;71;156m
          \u001b[48;2;255;71;156m[
          \u001b[38;2;255;255;255m${message.guild.name}
          \u001b[38;2;255;71;156m]
          \u001b[48;2;236;246;67m
          \u001b[38;2;236;246;67m
          \u001b[48;2;236;246;67m[
          \u001b[38;2;0;0;0m${message.channel.name}
          \u001b[38;2;236;246;67m]
          \u001b[48;2;121;241;247m
          \u001b[48;2;121;241;247m
          \u001b[38;2;121;241;247m[
          \u001b[38;2;0;0;0m${message.author.tag}
          \u001b[38;2;121;241;247m]
          \u001b[48;2;28;28;28m
          \u001b[38;2;121;241;247m 
          \u001b[48;2;28;28;28m${colors.rainbow(message.content)}
          \u001b[38;2;28;28;28m]
          \u001b[0m
          \u001b[38;2;28;28;28m
          \u001b[0m`
        )
      )
      fs.appendFile(
        'D:\\Non-Indexed\\Da-Bot\\logs\\logs.log',
        `[${message.guild.name}]:[${message.channel.name}]:[${message.author.tag}]: ${message.content}\n`,
        (err) => { if (err) { console.log(err) } })
    }
  }
