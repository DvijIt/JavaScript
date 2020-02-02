const clients = ['Tom', 'Jim', 'John', 'Bob'],
  balances = [1000, 2000, 3000, 4000],
  withdraw = (clients, balances, client, amount) => {
    let currentClient = clients.indexOf(client);
    return balances[currentClient] - amount;
  }
withdraw(clients, balances, 'Bob', 2000);