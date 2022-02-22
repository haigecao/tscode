// 类型检查机制，辅助开发，提升开发效率，
// 类型推断


interface Foo {
  bar: number
}

// let foo = {} as Foo;
// foo.bar = 1;

let foo: Foo = {
  bar: 1
};

let s: string = '1';
s = null;

interface X {
  a: any;
  b: any;
}

interface Y {
  a: any;
  b: any;
  c: any;
}

let x: X = { a: 1, b: 1 };
let y: Y = { a: 1, b: 1, c: 1 };

x = y;
// y = x;  // no
// 成员少的，兼容成员多的！


type Handler = (a: number, b: number) => void;
function haf(handler: Handler) {
  return handler;
}

let af = (p1: number, p2: number) => { };
let bf = (p1: number, p2?: number) => { };
let cf = (...args: number[]) => { };

af = bf;
cf = af;

// 函数兼容参数个数。接口成员少的，兼容成员多的。
// 

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Point2D {
  x: number;
  y: number;
}

let p3d = (point: Point3D) => { };
let p2d = (point: Point2D) => { };

p3d = p2d;
// p2d = p3d; // 错误，参数多的，可以接受参数少的赋值；


// 类型保护。在一个区块中，保证变量属于某种特定的类型。
// 可以在此区块中放心的引用此类型的属性，或者调用此类型的方法。


enum TypeLanguage {
  Java,
  JavaScript,
};

class Java {
  helloJava() {
    console.log('Java ...');
  }
  java: true;
}

class JavaScript {
  helloJavaScript() {
    console.log('javaScript ...');
  }
  javaScript: true;
}


// 类型保护方法
function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava !== undefined;
}


function getLanguage(type: TypeLanguage) {

  let lang = type === TypeLanguage.Java ? new Java() : new JavaScript();

  if (isJava(lang)) {
    lang.helloJava()
  } else {
    lang.helloJavaScript();
  }

  // instanceof 判断变量的类型
  if (lang instanceof Java) {
    lang.helloJava();
  } else {
    lang.helloJavaScript();
  }

  // in 判断类型属性是否在类中
  if ('java' in lang) {
    lang.helloJava();
  } else {
    lang.helloJavaScript();
  }

}

getLanguage(1);