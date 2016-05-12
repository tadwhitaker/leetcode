this.brand = "Haro";

var bike = {
  brand: "Trek",
  getBrand: function() {
    console.log(this);
    return this.x;
  }
};

bike.getBrand(); // Returns Trek because this refers to the bike object's brand value.

var retrieveBrand = bike.getBrand;
retrieveBrand(); // Returns Haro because this references the global value of brand;

var boundbrandType = retrieveBrand.bind(bike);
boundbrandType(); // Returns Trek because we bound it to this inside module.

var Schwinn = {
  brand: "Schwinn"
};

var tester = retrieveBrand.bind(Schwinn);
tester();