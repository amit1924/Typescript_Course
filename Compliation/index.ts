// The tsc --init command is used to initialize a TypeScript project by generating a tsconfig.json file. This file contains configuration settings for the TypeScript compiler (tsc). When you run tsc --init, TypeScript generates a tsconfig.json file with default settings, which you can then customize based on your project's needs.

// To compile a TypeScript project into javascript we use command  tsc .\index.ts


const add =(x: number, y: number)=>x+y;

const res =add(10,20)
console.log(res)