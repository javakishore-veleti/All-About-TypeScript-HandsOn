## About This Sub-Project 01-TypeScript-Essentials
1. Installing  TypeScript
- Always compile TypeScript code before it can run in the browser. 
- Above is because we need to run JavaScript eventually
- We can install it per project basis using "npm install typescript --save-dev"
- Above is available only in that project
- Alternatively we can invoke TypeScript compiler across the projects ie. at laptop globally using "npm tsc"

2. Using  TypeScript
- Create and Develop code in first-app.ts 
- Compile the above ts file using below command

```shell
npx tsc first-app.ts
# or
tsc first-app.tx
# NOTE: Both the above creates a JavaScript file by name first-app.js file in the same folder where first-app.ts file exists
```


