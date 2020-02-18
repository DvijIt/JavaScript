export function createLogger() {
  let memory = [];

  function warn(warn) {
    memory.push({
      message: warn,
      dateTime: new Date(),
      type: "warn"
    });
  }

  function error(error) {
    memory.push({
      message: error,
      dateTime: new Date(),
      type: "error"
    });
  }

  function log(log) {
    memory.push({
      message: log,
      dateTime: new Date(),
      type: "log"
    });
  }
  function getRecords(message) {
    if (message != undefined) {
      return memory
        .filter(el => el.type === message)
        .sort((a, b) => a.dateTime - b.dateTime);
    } else {
      return memory.sort((a, b) => a.dateTime > b.dateTime);
    }
  }

  return {
    warn,
    error,
    log,
    getRecords
  };
}

// const logger = createLogger();
// logger.warn('sgsege');
// logger.error('zxvzvxvzx');
// logger.log('qweqqw');
// logger.log('qweqqwgggd');
// console.log(logger.getRecords())
