/*
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

Pseudo-code:
    - use map to pass each user object in the array
    - return name property in user object
*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(user => user.name)

console.log(names); // John, Pete, Mary