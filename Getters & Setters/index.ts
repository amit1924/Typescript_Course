class myClass{
    private _myProperty:number = 0
    
    get myProperty():number {
        return this._myProperty
    }

    set myProperty(value:number){
        this._myProperty = value
    }

}

const myInstance = new myClass()
console.log(`The Current value is ${myInstance.myProperty}`)

myInstance.myProperty =99
console.log(`The New value is ${myInstance.myProperty}`)
