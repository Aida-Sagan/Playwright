class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello(name, age) {
        console.log(`Hello, my name is ${name} and i'm ${age}`);
    }
}

const person1 = new Person('Amina', 18);
person1.sayHello('Bob', 22);
person1.sayHello('MArtin', 24);