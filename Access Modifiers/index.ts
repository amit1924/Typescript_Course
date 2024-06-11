// Public Modifiers
class Person{
   public name: string;
    public age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
     greet(){
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}

const person1 = new Person("John",20)

person1.greet()



// Private Modifiers

class Human {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}

const human1 = new Human("Amit", 25);
// The following line will cause a TypeScript error because name and age are private
// console.log(`Name: ${human1.name}, Age: ${human1.age}`);

// However, the greet method can be called since it's public
human1.greet(); // My name is Amit and my age is 25




//  Protected Modifiers
class Employee {
   protected name: string;
   protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    protected greet() {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }

    
    public getName(): string {
        return this.name;
    }
}

class AnotherEmployee extends Employee{
    
    constructor(name:string ,age:number ){
        super(name,age);
    
    }
}

const rashmi = new Employee("Rashmi",29)
console.log(rashmi)
const amit = new AnotherEmployee("Amit",30)
//not work because it is protected
// console.log(amit.age)

console.log(amit.getName())//it will work even name is protected




