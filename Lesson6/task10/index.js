const clients = ['Tom', 'Jim', 'John', 'Bob'],
  balances = [1000, 2000, 3000, 4000],
  withdraw = (clients, balances, client, amount) => balances[clients.indexOf(client)] - amount;