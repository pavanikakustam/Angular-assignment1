// Boolean
let isTrue: boolean = true;
let isFalse: boolean = false;

// Any
let dynamicValue: any = 'Hello';
dynamicValue = 10;
dynamicValue = true;

// Array of strings
let fruits: string[] = ['apple', 'banana', 'orange'];

// Homogeneous arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let booleans: boolean[] = [true, false, true];
let colours: string[] = ['red', 'green', 'blue'];

// Heterogeneous array
let mixedValues: (string | number | boolean)[] = ['Hello', 10, true, 'World', false];

console.log(isTrue);
console.log(isFalse); 

console.log(dynamicValue);

console.log(fruits);

console.log(numbers);
console.log(booleans);
console.log(colours);

console.log(mixedValues);