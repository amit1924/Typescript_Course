 type Person ={
    name:string,
    age:number
 }

 const printPerson =(person:Person)=>{
return `Name: ${person.name} Age: ${person.age}`
 }


const res =printPerson({name:"Amit",age:30})
console.log(res)