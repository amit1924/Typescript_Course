// Original Interface

interface Car{
    brand:string;
    start():void;
}

// Decalaration merging(interface extension)
interface Car {
    model:string;
    stop():void;
}

const myCar:Car ={
    brand:"BMW",
    model:"BMW AC",
    start(){
        console.log("Start")
    },
    stop(){
        console.log("Stop")
    }
}

myCar.start();
myCar.stop();