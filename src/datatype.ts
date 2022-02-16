let bool: boolean = true;

let num: number = 123;

let str: string = "abc";

// 报错提示，不同类型的赋值是有问题的
// str = 123;

// 数组的定义
let arr: number[] = [1, 2, 3];
// let arr1: number[] = [1, 2, 3, "4"];  报错，数组只能是数字
let arr1: Array<number | string> = [1, 2, 3, "4"]; // 报错，数组只能是数字

// 元组
let tuple: [number, string] = [1, "1"];
tuple.push(123);
console.log(tuple);
// tuple[2]; // 越界了

// 函数，返回值被类型推断了
let add = (x: number, y: number) => {
  return x + y;
};

// 定义一个函数，返回值是 number
let compute: (x: number, y: number) => number;
compute = function (x, y) {
  return x + y * 2;
};

console.log(add(1, 2));
console.log(compute(1, 2));

let s1: symbol = Symbol();
let s2 = Symbol();
console.log(s1, s2, s1 == s2);

// undefined、null 可以复制给其他类型
num = undefined;

// void 0 返回一个 undefined
let noReturn = () => {}; // 没有返回值的函数，就是 void
