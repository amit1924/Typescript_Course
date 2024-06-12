// Type guards in TypeScript are used to narrow down the type of a variable within a conditional block. They help ensure that the variable is of a specific type, allowing TypeScript to provide better type checking and code completion


// Define two interfaces
interface Cat {
    name: string;
    meow: () => void;
}

interface Dog {
    name: string;
    bark: () => void;
}

// Define a function that uses type guards
function makeSound(animal: Cat | Dog) {
    if (isCat(animal)) {
        animal.meow();
    } else if (isDog(animal)) {
        animal.bark();
    }
}


function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).meow !== undefined;
}


function isDog(animal: Cat | Dog): animal is Dog {
    return (animal as Dog).bark !== undefined;
}


const myCat: Cat = {
    name: "Whiskers",
    meow: () => console.log("Meow!")
};

const myDog: Dog = {
    name: "Rover",
    bark: () => console.log("Woof!")
};


makeSound(myCat); 
makeSound(myDog); 