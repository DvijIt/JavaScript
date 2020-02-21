class Order {
  id = toString(Math.random());
  price = 0;
  dateCreated = new Date();
  isConfirmed = false;
  dateConfirmed = new Date();
  city = "";
  type = "type";
  constructor(price, city, type, ID) {
    this.price = price;
    this.city = city;
    this.type = type;
    this.id = ID;
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
  }
}
export { Order };
