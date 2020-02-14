 export function createLogger() {
  let warn;
  let error;
  let log;

  function warn(warn) {
    warn = warn;
  }

  function error(error) {
    error = error;
  }

  function log(log) {
    log = log;
  }

  function getRecords(warn, error, log) {
    return {
      // message: `[${}]`,
      // dateTime: `[${Date()}]`,
      // type: `[${}]`
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

// logger.log('qwerty');
// logger.getRecords('warn');

// console.log(logger.getRecords('warn'))