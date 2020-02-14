 export function createLogger() {
  let warnmemory;
  let errormemory;
  let logmemory;

  function warn(warn) {
    warnmemory = warn;
  }

  function error(error) {
    errormemory = error;
  }

  function log(log) {
    logmemory = log;
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