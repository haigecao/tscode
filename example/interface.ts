function Add1(x: number, y: number) {
	return x + y;
}

interface Add2 {
	(x: number, y: number): number;
}

type Add = (x: number, y: number) => number;

let add: Add = (a, b) => a + b;

console.log(add(1, 2));

add(1, 2);

// 可选参数
function Add5(x: number, y?) {
	return y ? x + y : x;
}

console.log(Add5(1));

// 默认值
