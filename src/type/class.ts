abstract class Animal {
  eat() {}
  abstract sleep(): void;
}

class Dog extends Animal {
  constructor(name: string) {
    super();
    this.name = name;
  }

  public name: string;

  run() {
    this.eat();
  }

  private pri() {} // 私有成员，只能在 类内调用

  protected pro() {}

  sleep(): void {
    console.log("Dog sleep ...");
  }

  static food: string = "bones";
}

let dog = new Dog("ww");
// dog.pri(); // 不能调用
// dog.food;
console.log("Dog.food static", Dog.food);

class Husky extends Dog {
  constructor(name: string, color: string) {
    super(name);
    this.color = color;
    // this.pri(); // 不能调用
    this.pro();
  }

  color: string;

  sleep(): void {
    console.log("Husky sleep ...");
  }
}

let husky = new Husky("husky", "red");

// 实现多态，运行时动态绑定
let animals: Animal[] = [dog, husky];
animals.forEach((item) => item.sleep());

// 方法的链式调用
class WorkFlow {
  step1() {
    console.log("WorkFlow step1 .");
    return this;
  }

  step2() {
    console.log("WorkFlow step2 .");
    return this;
  }
}

let ws = new WorkFlow();
ws.step1().step2();
