const { oneLineTrim } = require('common-tags')
const { rainbow } = require('colors')

module.exports = msg => {
  const pref = msg.channel.type === 'DM'
    ? (oneLineTrim`
        \x1b[1;38;2;255;71;156m
        \x1b[1;48;2;255;71;156m█
        \x1b[1;38;2;255;255;255mDM
        \x1b[1;38;2;255;71;156m█
        \x1b[1;48;2;121;241;247m
        \x1b[1;38;2;121;241;247m█`
      )
    : (oneLineTrim`
        \x1b[1;38;2;255;71;156m
        \x1b[1;48;2;255;71;156m█
        \x1b[1;38;2;255;255;255m${msg.guild.name}
        \x1b[1;38;2;255;71;156m]
        \x1b[1;48;2;236;246;67m
        \x1b[1;38;2;236;246;67m
        \x1b[1;48;2;236;246;67m█
        \x1b[1;38;2;0;0;0m${msg.channel.name}
        \x1b[1;38;2;236;246;67m█
        \x1b[1;48;2;121;241;247m
        \x1b[1;48;2;121;241;247m
        \x1b[1;38;2;121;241;247m█`
      )
  console.log(
    pref +
      (oneLineTrim`
        \x1b[1;38;2;0;0;0m${msg.author.tag}
        \x1b[1;38;2;121;241;247m█
        \x1b[1;48;2;28;28;28m
        \x1b[1;38;2;121;241;247m
        \x1b[1;48;2;28;28;28m ${rainbow(msg.content)}
        \x1b[1;38;2;28;28;28m█
        \x1b[0m
        \x1b[1;38;2;28;28;28m
        \x1b[0m`
      )
  )
}
