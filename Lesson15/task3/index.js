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

  function getRecords(log) {
    return {
      message: `[${memory}]`,
      dateTime: `[время регистрации сообщения]`,
      type: `[тип записи]`
    }
  }
  return {
    warn,
    error,
    log,
    getRecords
  }
}