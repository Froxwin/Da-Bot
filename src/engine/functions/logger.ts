export = msg => {
  const lB = '\x1b[38;2;255;185;99m[ \x1b[0m';
  const rB = '\x1b[38;2;255;185;99m ]\x1b[0m';
  const pref = msg.channel.type === 'DM'
    ? `${lB}\x1b[38;2;252;204;255mDM${rB}`
    : (
        `${lB}\x1b[38;2;252;204;255m${msg.guild.name}` +
        `${rB}${lB}\x1b[93m${msg.channel.name}${rB}`
      );
  console.log(
    pref +
    (
      `${lB}\x1b[38;2;161;255;247m${msg.author.tag}` +
      `${rB}\x1b[38;2;255;185;99m>\x1b[0m ${msg.content}`
    )
  );
}
