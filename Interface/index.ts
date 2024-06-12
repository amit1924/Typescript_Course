// Objects Interface

interface Person {
  name: string;
  age: number;
}

const newPerson: Person = {
  name: "John",
  age: 20,
};

console.log(`Name: ${newPerson.name} Age: ${newPerson.age}`);

// Function Interface

interface MathOperation {
  (x: number, y: number): number;
}

const add: MathOperation = (x, y) => x + y;
console.log(add(5, 5));
const sub: MathOperation = (x, y) => x - y;
console.log(sub(10, 5));

// Method Interface
interface Human {
  name: string;
  city: string;
  age: number;
  greet(): void;
}

function sayHello(human: Human) {
  console.log(`I am  ${human.name} and my age is ${human.age}`);
  human.greet();
}

const john: Human = {
  name: "John",
  city: "San Francisco",
  age: 20,
  greet() {
    console.log("Hello John");
  },
};
const amit: Human = {
  name: "Amit",
  city: "Patna",
  age: 30,
  greet() {
    console.log("Hello Amit");
  },
};
sayHello(john);
sayHello(amit);

// Extends Interface
interface MovieDetails {
  readonly name: string;
  ratings: number;
  printMovieInfo(name: string, price: number, ratings: number): string | number;
}

interface MovieGenre extends MovieDetails {
  genre: string;
}

const movie1: MovieGenre = {
  name: "3 Idiots",
  genre: "Drama",
  ratings: 9.7,
  printMovieInfo(
    name: string,
    price: number,
    ratings: number
  ): string | number {
    return `Movie Name: ${name} Price: ${price} Ratings: ${ratings}`;
  },
};

const res =movie1.printMovieInfo("Munna Bhai",100,9.8)
console.log(res)


// Class Interface
interface Vehicle{
    start(): void;
    stop(): void;
}

class Car implements Vehicle{
    start(): void{
        console.log("Car is starting...")
    }
    stop(): void{
        console.log("Car is stopped...")
    }
}


const myCar =new Car()
myCar.start()
myCar.stop()
