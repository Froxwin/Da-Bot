export = (msg, cmd) =>
  msg.content.substring(
    msg.client.prefix.length + cmd.length,
    msg.content.length
  )
