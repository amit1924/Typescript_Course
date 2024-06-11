const person:{firstName:string, lastName:string}={
    firstName:"Amit",
    lastName:"Kumar"
}

console.log(person.firstName, person.lastName)


////////////////////////////////

function getPerson():{firstName:string, lastName:string}{
    return {
        firstName:"Amit",
        lastName:"Kumar"
    }
}

let res =getPerson()
console.log(res)
console.log(res.firstName, res.lastName)