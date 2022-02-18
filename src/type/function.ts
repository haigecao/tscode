

// 定义一个函数

function sum(x: number, y: number): number {
  return x + y;
}

console.log(sum(1, 2));
// console.log(sum(1, 2, 3)); // 参数变多了

// 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};

// 用接口定义函数的形状
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1;
}

console.log("mySearch", mySearch('12345', '12'));

// 可选参数
function buildName(lastName: string, firstName?: string) {

  if (firstName) {
    return firstName + " " + lastName;
  }

  return lastName;
}

console.log(buildName('haige', 'cao'));

// 剩余参数
function push(array: any[], ...items: any[]) {
  items.forEach(function (item) {
    array.push(item);
  })

  return items;
}

let a: Array<any> = [];
console.log('push', push(a, 1, 2, 3));

