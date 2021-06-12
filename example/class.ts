class Dog {
	constructor(name: string) {
		this.name = name;
	}
	name: string;
	run() {
		return 'run';
	}
	private pri() {
		console.log('pri');
	}
	protected pro() {
		console.log('pro');
	}
	readonly legs: number = 4; // 只读属性必须要被赋值
}

let dog = new Dog('ej');
console.log(dog.run());
console.log(dog);

class Husky extends Dog {
	constructor(name: string, color: string) {
		super(name);
		this.color = color;
	}
	color: string;
}
