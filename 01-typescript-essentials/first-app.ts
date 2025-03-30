let userName = "My first TypeScript App";
let userEmail: string = "some-email@email.com";
let userIdentifier: string | number = 12345;
console.log("Hello " + userName);
console.log("Email: " + userEmail);
console.log("User ID: " + userIdentifier);
// userID = "12345"; // This will work because userID can be a string or number
// userID = true; // This will not work because userID cannot be a boolean
// userID = null; // This will not work because userID cannot be null
// userID = undefined; // This will not work because userID cannot be undefined
// userID = {}; // This will not work because userID cannot be an object
// userID = []; // This will not work because userID cannot be an array

// Working With Object Types
let user: { name: string, age: number, email: string} = {
    name: "John Doe",
    age: 30,
    email: ""};

user.name = "Jane Doe"; // This will work
user.age = 25; // This will work
// user.email = 12345; // This will not work because email must be a string
// user.email = true; // This will not work because email must be a string
// user.email = null; // This will not work because email must be a string
// user.email = undefined; // This will not work because email must be a string
// user.email = {}; // This will not work because email must be a string
// user.email = []; // This will not work because email must be a string
// user.email = ""; // This will work because email can be an empty string

let user2: { 
    name: string; 
    age: number, 
    email: string;
    id: string | number; } ;

user2 = {
    name: "John Doe",
    age: 30,
    email: "",
    id: 12345
};
user2.name = "Jane Doe"; // This will work
user2.age = 25; // This will work
user2.email = ""; // This will work
user2.id = 12345; // This will work



