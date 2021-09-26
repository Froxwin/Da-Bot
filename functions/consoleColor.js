function foreground (r, g, b) {
  return `\u001b[38;2;${r};${g};${b}`
}
function background (r, g, b) {
  return `\u001b[48;2;${r};${g};${b}`
}

module.exports = { foreground, background }
