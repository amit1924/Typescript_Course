//Normal Function
function printNumber(value: number,values:number): [number, number] {
return [value, values]
}
function printString(value: string,values:string): [string ,string] {
return [value, values]
}

function printBoolean(value:boolean,values:boolean): [boolean, boolean] {
    return [value, values]
}


const res =printNumber(12,20)
console.log(res)

const resStr=printString("hello","world")
console.log(resStr)

const resBool = printBoolean(true,false)
console.log(resBool)


// /////////////////////////
// Generic Functions

function newData<Type>(value:Type,values:Type):[Type,Type] {
return [value,values]
}

const data =newData<number>(10,100)
console.log(data)


function newString<Type>(value:Type,values:Type):[Type,Type] {
return [value,values]
}

const str =newString<string>("hello","world")
console.log(str)

function newBoolean<Type>(value:Type,values:Type):[Type,Type] {
return [value,values]
}

const bool =newBoolean<boolean>(true,false)
console.log(bool)

// //////////////////////////////////
function uniqueData<T>(value:T,values:T):[T,T] {
return [value,values]
}

interface Dog{
    name:string;
    breed:string;
}
const dog1 =uniqueData<Dog>(
    { name: "Tommy",breed: "Pitbull"},
    { name: "Buddy",breed: "Labrador"}
)

console.log(dog1)

////////////////////////////////////////////////////////////////
function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
    return array.filter(item => condition(item));
}

const numArray = [1, 2, 3, 4, 5, 6,7,8,9, 10, 11, 12, 13];
const evenNum = filterArray<number>(numArray, num => num % 2 === 0);

console.log(evenNum);


////////////////////////////////////////////////////////////////
// Define a generic class Box
class Box<T> {
    private content: T;

    constructor(content: T) {
        this.content = content;
    }

    // Method to get the content of the box
    getContent(): T {
        return this.content;
    }

    // Method to set the content of the box
    setContent(content: T): void {
        this.content = content;
    }
}

// Example usage with a number
const numberBox = new Box<number>(123);
console.log(numberBox.getContent()); 
numberBox.setContent(456);
console.log(numberBox.getContent()); 

// Example usage with a string
const stringBox = new Box<string>("Hello");
console.log(stringBox.getContent()); 


stringBox.setContent("World");
console.log(stringBox.getContent()); 
