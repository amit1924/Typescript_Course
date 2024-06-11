const multiply =(a:number,b:number)=>{
    return a*b;
}

let res =multiply(16,15)
console.log(res)


// 
const greet =(person:string ="Amit")=>{
    return `Hello ${person}`
}
let res1=greet("Rahul")
console.log(res1) //Hello Rahul

// Return Annotations
const multiply1 =(a:number,b:number):number=>{
    return a*b;
}

let res2 =multiply(16,15)
console.log(res2)