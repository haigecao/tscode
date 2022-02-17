

enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest,
}

console.log("Role.Developer", Role.Developer);
console.log("Role.Guest", Role.Guest);

enum Message {
  Success = "恭喜了",
  Fail = "抱歉了",
}

console.log("Role.Success", Message.Success);

// 枚举是只读，定义了不能修改
// Message.Success = '123';

enum Char {
  a,
  b = Char.a,
  c = 1 + 3,  // 直接出现结果
  d = Math.random(),  // 运行时计算结果
  e = '123'.length,   // 运行时计算结果
  f = 6,  // f 必须赋值，否则提示错误
}

// 枚举类型，可以让程序 以不变应万变！