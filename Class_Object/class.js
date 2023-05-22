class Product {
  constructor(name, price) {
    this.name = name || "unknown";
    this.price = price || "unknown";
  }
  isInStock() {
    Math.floor(Math.random() * 10) % 2 == 0
      ? console.log("Còn hàng")
      : console.log("Hết hàng");
  }
}

class Mobile extends Product {
  constructor(brand, name, price) {
    super(name, price);
    this.brand = brand || "unknown";
  }
  getBrand() {
    return this.brand;
  }
}

var mobile1 = new Mobile("apple", "Iphpne 14 Promax 128GB", 26440000);
console.log(mobile1.getBrand());
mobile1.isInStock();
