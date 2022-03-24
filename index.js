const { isRequired, getTimeStamp } = require("./utility.js")  

  function INFO (message) {
    log('INFO', message)
  }
  
  function DEBUG (message) {
    log('debug', message)
  }
  
  function FATAL (message) {
    log('fatal', message)
  }
  
  function TRACE (message) {
    log('trace', message)
  }
  
  function WARN (message) {
    log('warn', message)
  }
  
  // eslint-disable-next-line no-use-before-define
  function getLogLevel (levelCode = isRequired(levelCode)) {
    switch (levelCode) {
      case 'trace':
        return 'trace'
        break
      case 'debug':
        return 'debug'
        break
      case 'INFO':
        return 'INFO'
        break
      case 'warn':
        return 'warn'
        break
      case 'error':
        return 'error'
        break
      case 'fatal':
        return 'FATAL'
        break
      default:
    }
  }
  // eslint-disable-next-line no-use-before-define
  function getColor (levelCode = isRequired(levelCode)) {
    switch (levelCode) {
      case 'trace':
        return '\x1b[36m'
        break
      case 'debug':
        return '\x1b[33m'
        break
      case 'INFO':
        return '\x1b[32m'
        break
      case 'warn':
        return '\x1b[31m'
        break
      case 'error':
        return '\x1b[31m'
        break
      case 'fatal':
        return '\x1b[31m'
        break
      default:
    }
  }
  
  function log (level = isRequired('logLevel'), message = isRequired('message to be displayed')) {
    const timestamp = getTimeStamp('timeDate')
    const logType = getLogLevel(level)
    let typeLine = ''
    switch (logType) {
      case 'trace':
        typeLine = `[TRACE ${timestamp}`
        break
      case 'debug':
        typeLine = `[DEBUG ${timestamp}`
        break
      case 'INFO':
        typeLine = `[INFO ${timestamp}`
        break
      case 'warn':
        typeLine = `[WARN ${timestamp}`
        break
      case 'error':
        typeLine = `[ERROR ${timestamp}`
        break
      case 'fatal':
        typeLine = `[FATAL ${timestamp}`
        break
      default:
        console.log('Nope, Something fucked up big time')
        return
    }
    const logColor = getColor(level)
    console.log(logColor, typeLine + ':' + ' ' + message + ']')
    // Logging to file next
  }
  
  module.exports = {
    INFO,
    WARN,
    DEBUG,
    TRACE,
    FATAL
  }