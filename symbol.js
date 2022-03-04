let email = Symbol();
let Employee = {
  name: "rajesh",
  phone: 9800000000,
  [email]: "rajesh@gmail.com"
};

let allKeys = Reflect.ownKeys(Employee);
let privateKeys = Object.getOwnPropertySymbols(Employee);
let publicKeys = Object.keys(Employee);

console.log(allKeys)
console.log(privateKeys)
console.log(publicKeys)
