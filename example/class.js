var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.run = function () {
        return 'run';
    };
    return Dog;
}());
var dog = new Dog('ej');
console.log(dog.run());
console.log(dog);
