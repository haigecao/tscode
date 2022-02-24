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