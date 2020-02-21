class Order {
  id = toString(Math.random());
  price = 0;
  dateCreated = new Date();
  isConfirmed = false;
  dateConfirmed = new Date();
  city = "";
  type = "type";
  constructor(price, city, type) {
    this.id = toString(Math.random());
    this.price = 0;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = new Date();
    this.city = "";
    this.type = "type";
  }

  checkPrice() {
    return this.price > 1000;
  }

  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }

  isValidType() {
    if (this.type === "Buy" || this.type === "Sell") return true;
    else return false;
  }
}
export { Order };
