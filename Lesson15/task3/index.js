function createLogger() {
  let memory = [];

  function warn(warn) {
    memory.push({
      message: warn,
      dateTime: Date(),
      type: 'warn'
    });
  }

  function error(error) {
    memory.push({
      message: error,
      dateTime: Date(),
      type: 'error'
    });
  }

  function log(log) {
    memory.push({
      message: log,
      dateTime: Date(),
      type: 'log'
    });
  }
  function getRecords(message) {
    if (message === undefined) {
      return memory
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
// console.log(logger.getRecords('qwer'))