function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0) {
    throw RangeError('Cannot create that.');
  }
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

function Bike(name, price) {
  Product.call(this, name, price);
  this.category = 'bike';
  console.log(this);
}

var details = ['Masonic', 1000000];

var yoyo = new Toy("yoyo", 11.99);
var cheese = new Food("Swiss", 5.99);
var haro = new Bike("Haro", 299);
