type Person={
name:string,
age:number,
city?:string,
}

const person:Person ={
    name: 'John',
    age:16,
// city:"San Francisco",
}

console.log(person.name,person.age)
console.log(person.city)//undefined