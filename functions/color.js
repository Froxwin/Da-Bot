module.exports =
  () => {
    const rR = Math.floor(Math.random() * 255)
    const rG = Math.floor(Math.random() * 255)
    const rB = Math.floor(Math.random() * 255)
    return `#${rR.toString(16)}${rB.toString(16)}${rG.toString(16)}`
  }
