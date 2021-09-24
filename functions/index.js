module.exports = {
  logger: require('./logger'),
  color: require('./color'),
  stuff: require('./stuff'),
  boundRandColor: require('./boundRandColor'),
  contentFetcher: require('./contentFetcher')
}

/*
const functionArray = []
const functions =
  fs.readdirSync('D:\\Non-Indexed\\Da-Bot\\functions').filter(file => file.endsWith('.js'))
for (const file of functions) {
  const module = require(`./${file}`)
  if (file !== 'index.js') {
    functionArray.push(module)
  }
}
*/
