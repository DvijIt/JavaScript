export function createLogger() {
  let memory = [];

  function warn(warn) {
    memory.push({
      message: warn,
      dateTime: Date(),
      type: "warn"
    });
  }

  function error(error) {
    memory.push({
      message: error,
      dateTime: Date(),
      type: "error"
    });
  }

  function log(log) {
    memory.push({
      message: log,
      dateTime: Date(),
      type: "log"
    });
  }
  function getRecords(message) {
    if (message != undefined) {
      return memory
        .filter(el => el.type === type)
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
