// Define two interfaces
interface Person {
    name: string;
    age: number;
}

interface Employee {
    employeeId: number;
    position: string;
}

// Create an intersection type
type PersonEmployee = Person & Employee;


function printEmployeeDetails(employee: PersonEmployee) {
    console.log(`Name: ${employee.name}`);
    console.log(`Age: ${employee.age}`);
    console.log(`Employee ID: ${employee.employeeId}`);
    console.log(`Position: ${employee.position}`);
}


const employee: PersonEmployee = {
    name: "John Doe",
    age: 30,
    employeeId: 12345,
    position: "Software Developer"
};


printEmployeeDetails(employee);
