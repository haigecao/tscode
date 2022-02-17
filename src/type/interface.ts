// 接口定义对象
interface List {
  readonly id: number;
  name: string;
  [x: string]: any;
  age?: number;
}

interface Result {
  data: List[];
}

function render(result: Result) {
  result.data.forEach((val) => {
    console.log(val.id, val.name);
    if (val.age) {
      console.log(val.age);
    }
  });
}

let result = {
  data: [
    { id: 1, name: "A", sex: "male" },
    { id: 2, name: "B", age: 31 },
  ],
};

// result.data[0].id = 12;
console.log(result);

render(result);

// 字符串形式的数组
interface StringArray {
  [index: number]: string; // 索引签名
}

let chars: StringArray = ["a", "b"];

// 接口定义函数

let fun: (x: number, y: number) => number;

//接口的名称
interface Add {
  (x: number, y: number): number;
}

// 类型别名
type funA = (x: number, y: number) => number; // 类型别名

let funAction: funA = (a, b) => {
  return a + b;
};

console.log("funAction", funAction(1, 2));

// 混合类型的方法，既可以有函数，也可以使用对象

interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

function getLib() {
  let lib: Lib = (() => {}) as Lib;
  lib.version = Math.random().toString();
  lib.doSomething = () => {
    return lib.version + " do some thing";
  };

  return lib;
}

let lib1 = getLib();
console.log(lib1.doSomething());
console.log("lib1.version ", lib1.version);

let lib2 = getLib();
console.log(lib2.doSomething());
console.log("lib2.version ", lib2.version);
