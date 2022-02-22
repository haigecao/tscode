/**
 * 函数和类可以轻松的支持多种类型，增强程序的扩展性
 *
 * 不必写多条函数重载，冗长的联合类型声明，增强代码的可读性
 *
 * 灵活的控制类型之间的约束
 */

function log<T>(value: T): T {
  console.log("log function", value);
  return value;
}

log<string[]>(["a", "b"]);

interface Log {
  <T>(value: T): T;
}

// 把泛型 当成 函数参数
// 泛型 不能 使用在静态成员

class Food<T> {
  color(col: T) {
    console.log("color", col);
    return col;
  }
}

let color1 = new Food();
color1.color(1);
color1.color({ a: 1 });
