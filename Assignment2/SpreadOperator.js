//example1
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
const combinedObject = { ...object1, ...object2 };
console.log(combinedObject);

//example2
const originalObject = { name: 'pavani', age: 23 };
const modifiedObject = { ...originalObject, age: 23, city: 'New York' };

console.log(modifiedObject);