const moment = require('moment-timezone')

let targetTimezone = ''
moment.tz.setDefault('America/Denver')

if (process.argv.length < 3) {
  console.log('Usage: node index.js <date>')
  process.exit(1)
}

targetTimezone = process.argv[2]

console.log(
  `The time at ${targetTimezone} is ${moment()
    .tz(targetTimezone)
    .format('MMMM Do YYYY, h:mm:ss a')}`
)
