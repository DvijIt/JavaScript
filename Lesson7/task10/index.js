const clients = ['Tom', 'Jim', 'John', 'Bob'],
  balances = [1000, 2000, 3000, 4000],
  withdraw = (clients, balances, client, amount) => amount > balances[clients.indexOf(client)] ? -1 : balances[clients.indexOf(client)] - amount;