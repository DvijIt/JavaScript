export default function createMessenger() {
  let message = 'just learn it!';

  let sender = 'Gromcode';
  
  function sendMessage(name) {
    console.log(`${name}, ${message}. Your ${sender}`);
  }
  
  function setMessage(text) {
    message = text.bold();
  }

  function setSender(text) {
    sender = text.bold();
  }
  return {
    sendMessage,
    setMessage,
    setSender
  };
}
const messenger1 = createMessenger();
messenger1.setMessage('Good job!');
messenger1.setSender('Gromcode')
messenger1.sendMessage('Bob');