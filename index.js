const { isRequired, getTimeStamp } = require("./utility.js")  

  function INFO (message = isRequired('message to be displayed')) {
    log('INFO', message)
  }
  
  function DEBUG (message = isRequired('message to be displayed')) {
    log('DEBUG', message)
  }
  
  function FATAL (message = isRequired('message to be displayed')) {
    log('FATAL', message)
  }
  
  function TRACE (message = isRequired('message to be displayed')) {
    log('TRACE', message)
  }
  
  function WARN (message = isRequired('message to be displayed')) {
    log('WARN', message)
  }
  
  // eslint-disable-next-line no-use-before-define
  function getLogLevel (levelCode = isRequired(levelCode)) {
    switch (levelCode) {
      case 'TRACE':
        return 'TRACE'
        break
      case 'DEBUG':
        return 'DEBUG'
        break
      case 'INFO':
        return 'INFO'
        break
      case 'WARN':
        return 'WARN'
        break
      case 'ERROR':
        return 'ERROR'
        break
      case 'FATAL':
        return 'FATAL'
        break
      default:
    }
  }
  // eslint-disable-next-line no-use-before-define
  function getColor (levelCode = isRequired(levelCode)) {
    switch (levelCode) {
      case 'TRACE':
        return '\x1b[36m'
        break
      case 'DEBUG':
        return '\x1b[33m'
        break
      case 'INFO':
        return '\x1b[32m'
        break
      case 'WARN':
        return '\x1b[31m'
        break
      case 'ERROR':
        return '\x1b[31m'
        break
      case 'FATAL':
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
      case 'TRACE':
        typeLine = `[TRACE ${timestamp}`
        break
      case 'DEBUG':
        typeLine = `[DEBUG ${timestamp}`
        break
      case 'INFO':
        typeLine = `[INFO ${timestamp}`
        break
      case 'WARN':
        typeLine = `[WARN ${timestamp}`
        break
      case 'ERROR':
        typeLine = `[ERROR ${timestamp}`
        break
      case 'FATAL':
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