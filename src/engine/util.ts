export function color() {
  return `#${(~~(Math.random() * 0xffffff)).toString(16)}`;
}

export function fetchContent(msg, cmd) {
  return msg.content.substring(
    msg.client.prefix.length + cmd.name.length,
    msg.content.length
  );
}

export function rainbow(str: string) {
  let i = 29;
  return str
    .split('')
    .map(c =>
      c === ' ' ? c : (i > 35 ? (i = 30) : i++) && `\x1b[${i}m${c}\x1b[0m`
    )
    .join('');
}
