// 泛型

function log<T>(value: T): T {
	console.log(value);

	return value;
}

log<string[]>(['a', 'b']);

// 代表类型
interface Log<T = string> {
	(value: T): T;
}

let myLog: Log = log;
myLog('1');
