// 映射类型
interface ObjectShine {
  x: number;
  y: number;
  z: number;
}

type ObjectReadObj = Readonly<ObjectShine>; // 只读
type ObjectPartial = Partial<ObjectShine>; // 可选
type ObjectPick = Pick<ObjectShine, "x" | "y">; // 筛选

type RecordObj = Record<"x" | "y", ObjectShine>; // 映射类型

// 条件类型
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : "object";

type T1 = TypeName<string>;
type T2 = TypeName<string[]>;
type T3 = TypeName<string | string[]>;

// T extends U > X : Y; // T 可以赋值给 类型 U，就是 X，否则就是 Y；
// (A | B) extends U ? X : Y; ==== (A extends U ? X : Y) | (B extends U ? X : Y);

// 可以做类型过滤
type Diff<T, U> = T extends U ? never : T; // 剔除类型 T 中，跟类型 U 相似的。

type T4 = Diff<"a" | "b" | "c", "a" | "c" | "d">;

type NotNull<T> = Diff<T, undefined | null>;
type T5 = NotNull<string | number | undefined | null>; // 过滤了 null 和 undefined

// Extract<T, U>   抽取了 T 可以 赋值给 U 的
type T6 = Extract<"a" | "b" | "c", "a" | "e">; // a

// Exclude<T, U>   抽取了 T 中有，U 中没有的字符
type T7 = Exclude<"a" | "b" | "c", "a" | "b" | "e">; // c

// ReturnType<T> 获取一个函数返回值的类型
type T8 = ReturnType<() => string>;
