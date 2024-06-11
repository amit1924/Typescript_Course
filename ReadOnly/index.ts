type Person={
    name:string,
    age:number,
    readonly city:string,
    }
    
    const person:Person ={
        name: 'John',
        age:16,
    city:"San Francisco",
    }


    // Cannot assign to 'city' because it is a read-only property.ts
    // person.city="New York"
    
    console.log(person.name,person.age)
    console.log(person.city)