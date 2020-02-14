export function createLogger() {
  let memory;

  function warn(warn) {
    memory = warn;
  }

  function error(error) {
    memory = error;
  }

  function log(log) {
    memory = log;
  }

  function getRecords(warn) {
    return {
      message: `[${memory}]`,
      dateTime: `[${Date.now()}]`,
      type: `[${memory}]`
    }
  }
  return {
    warn,
    error,
    log,
    getRecords
  }
}