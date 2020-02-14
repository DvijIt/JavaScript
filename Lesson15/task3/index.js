 export function createLogger() {
  let memory = [];

  function warn(warn) {
    memory.push(warn);
  }

  function error(error) {
    memory.push(error);
  }

  function log(log) {
    memory.push(log);
  }

  function getRecords(message) {
    
    return {
      message: memory.filter(el => el === message),
      dateTime: `[${Date()}]`,
      type: memory.filter(el => el == message)
    }
  }

  return {
    warn,
    error,
    log,
    getRecords
  }
}


// const logger = createLogger();
// logger.warn('warn')

// console.log(logger.getRecords('warn'))