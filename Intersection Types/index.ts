type Person = {
  name: string;
  age: number;
  city: string;
};

type Engineer = {
  position: string;
  specialisation: string;
};

type Employee = Person & Engineer;

const amit: Employee = {
  name: "Amit",
  age: 30,
  city: "San Francisco",
  position: "developer",
  specialisation: "FullStack",
};

console.log(
  amit.name +
    " " +
    amit.age +
    " " +
    amit.city +
    " " +
    amit.position +
    " " +
    amit.specialisation
);
