// OOP

class CounterId {
  private id: number = 0;
  getId() {
    return ++this.id;
  }
}

interface ModifiedMessage {
  priceLastModifiedTime: Date;
  priceLastModifiedUser: string;
}

interface GoodsMessage {
  id: number;
  name: string;
  createTime: Date;
}

let counterId = new CounterId();

class Goods {
  private id: number;
  private name: string;
  private createTime: Date;
  private price: number = 0;
  private priceLastModifiedTime: Date;
  private priceLastModifiedUser: string = "system";

  constructor(name: string, price: number) {
    this.id = counterId.getId();
    this.name = name;
    this.price = price;
    this.createTime = this.priceLastModifiedTime = new Date();
  }

  getPrice(): number {
    return this.price;
  }

  getId(): number {
    return this.id;
  }

  getGoodsMessage(): GoodsMessage {
    return {
      name: this.name,
      id: this.id,
      createTime: this.createTime,
    };
  }

  getLastModifiedMessage(): ModifiedMessage {
    return {
      priceLastModifiedTime: this.priceLastModifiedTime,
      priceLastModifiedUser: this.priceLastModifiedUser,
    };
  }

  setPrice(price: number, user: string) {
    this.price = price;
    this.priceLastModifiedUser = user;
    this.priceLastModifiedTime = new Date();
  }
}

console.clear();

let apple = new Goods("apple", 12);
let tea = new Goods("tea", 120);

setTimeout(() => {
  apple.setPrice(13, "haige");
  console.info(apple.getLastModifiedMessage());
}, 1000 * 3);

console.info(apple.getLastModifiedMessage());
console.log(tea.getGoodsMessage());
