function createLogger() {
  let memory = [];

  function warn(warn) {
    memory[0] = {
      message: warn,
      dateTime: Date(),
      type: 'warn'
    };
  }

  function error(error) {
    memory[1] = {
      message: error,
      dateTime: Date(),
      type: 'error'
    };
  }

  function log(log) {
    memory[2] = {
      message: log,
      dateTime: Date(),
      type: 'log'
    };
  }
  function getRecords(message) {
    return memory.filter(el => el.type === message);
    // 
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
// console.log(logger.getRecords('warn'))