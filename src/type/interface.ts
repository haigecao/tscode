// 接口定义对象
interface List {
  readonly id: number;
  name: string;
  age?: number;
}


interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach((val) => {
    console.log(val.id, val.name);
    if (val.age) {
      console.log(val.age);
    }
  })
}

let result = {
  data: [
    { id: 1, name: "A", sex: 'male' },
    { id: 2, name: "B" }
  ]
}

render(result);


// 接口定义函数

let fun: (x: number, y: number) => number;

interface Add {
  (x: number, y: number): number
}

type funA = (x: number, y: number) => number; // 类型别名

let funAction: funA = (a, b) => {
  return a + b;
}

console.log('funAction', funAction(1, 2));

// 混合类型的方法

interface Lib {
  (): void,
  version: string,
  doSomething(): void,
}

function getLib() {
  let lib: Lib = (() => { }) as Lib;
  lib.version = (Math.random()).toString();
  lib.doSomething = () => {
    return lib.version + ' do some thing';
  }

  return lib;
}

let lib1 = getLib();
console.log(lib1.doSomething());

let lib2 = getLib();
console.log(lib2.doSomething());
