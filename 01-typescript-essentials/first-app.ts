let userFullName = "My first TypeScript App";
let email: string = "some-email@email.com";
let userID: string | number = 12345;
console.log("Hello " + userFullName);
console.log("Email: " + email);
console.log("User ID: " + userID);
// userID = "12345"; // This will work because userID can be a string or number
// userID = true; // This will not work because userID cannot be a boolean
// userID = null; // This will not work because userID cannot be null
// userID = undefined; // This will not work because userID cannot be undefined
// userID = {}; // This will not work because userID cannot be an object
// userID = []; // This will not work because userID cannot be an array