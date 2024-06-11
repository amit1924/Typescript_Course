class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
     greet(){
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}

const person1 = new Person("John",20)
console.log(`Name: ${person1.name}, Age:${person1.age}`)
person1.greet()