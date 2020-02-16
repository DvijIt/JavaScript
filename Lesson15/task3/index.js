export function createLogger() {
  let memory = [];

  function warn(text) {
    memory.push({
      message: text,
      dateTime: new Date(),
      type: 'warn'
    });
  }

  function error(text) {
    memory.push({
      message: text,
      dateTime: new Date(),
      type: 'error'
    });
  }

  function log(text) {
    memory.push({
      message: text,
      dateTime: new Date(),
      type: 'log'
    });
  }
  function getRecords(message) {
    if (message === undefined) {
      return memory.sort((a, b) => b.dateTime - a.dateTime)
    }
    return memory.filter(el => el.type === message);
  }

  return {
    warn,
    error,
    log,
    getRecords
  }
}


// const logger = createLogger();
// logger.warn('sgsege');
// logger.error('zxvzvxvzx');
// logger.log('qweqqw');
// logger.log('qweqqwgggd');
// console.log(logger.getRecords())