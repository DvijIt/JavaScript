class Wallet {
  _balance = 0;

  get_balance() {
    return this._balance;
  }
  deposit(amount) {
    this._balance += amount;
  }
  withdraw(amount) {
    if(amount > this._balance) {
      console.log('No enougth funds');
      return false;
    }
    this._balance -= amount;
  }
}
