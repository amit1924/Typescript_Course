let password: string | number = 20;

type UserInfo = {
    first: string;
    last: string;
    age: number;
}

type AccountDetails = {
    email: string;
    password: string;
}

let user: UserInfo | AccountDetails = {
    first: "Amit",
    last: "Kumar",
    age: 20,
    email: "amit@test.com",
    password: "password"
}

// type guards to check the type of user

if ('first' in user && 'last' in user) {
    console.log(`Name: ${user.first} ${user.last}`);
} else {
    console.log(`Email: ${user.email}`);
}

const items: (number | string)[] = [1, 5, 7, "HELLO"];
console.log(items);
