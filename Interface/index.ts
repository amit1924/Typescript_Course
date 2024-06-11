// Objects Interface

interface Person{
    name: string;
    age: number;    

}

const newPerson: Person ={
    name: "John",
    age: 20
}

console.log(`Name: ${newPerson.name} Age: ${newPerson.age}`)


// Function Interface

interface MathOperation{
    (x: number, y: number):number;
}

const add: MathOperation =(x,y)=>x+y
console.log(add(5,5))
const sub: MathOperation =(x,y)=>x-y
console.log(sub(10,5))



// Method Interface
interface Human{
    name: string;
    city: string;
    age: number;
    greet():void;
}

function sayHello(human: Human){
    console.log(`I am  ${human.name} and my age is ${human.age}`)
    human.greet()
}

const john: Human ={
    name: "John",
    city: "San Francisco",
    age:20,
    greet(){
        console.log("Hello John")
    }
    

}
const amit: Human ={
    name: "Amit",
    city: "Patna",
    age:30,
    greet(){
        console.log("Hello Amit")
    }
    

}
sayHello(john)
sayHello(amit)

