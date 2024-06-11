// The never type is a special type that represents values that never occur. It is used to indicate that a function either never returns or always throws an exception



function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        console.log("This will run forever.");
    }
}
