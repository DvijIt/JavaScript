export default function createMessenger() {
  let message = 'Just learn it!';

  let sender = 'Gromcode';
  
  function sendMessage(name) {
    console.log(`${name}, ${message} Your ${sender}`);
  }
  
  function setMessage(text) {
    message = text;
  }

  function setSender(text) {
    sender = text;
  }
  return {
    sendMessage,
    setMessage,
    setSender
  };
}
// const messenger1 = createMessenger();
// messenger1.sendMessage('Bob');
// messenger1.setMessage('Good job!');
// messenger1.setSender('Gromcode');
// messenger1.sendMessage('Bob');

// const messenger2 = createMessenger();
// messenger2.sendMessage('Ann');
// messenger2.setMessage('Good!');
// messenger2.setSender('Gromcode2');
// messenger2.sendMessage('Ann');
