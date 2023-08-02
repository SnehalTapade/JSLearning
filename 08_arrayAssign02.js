
console.log(`====================Step 1: ========================`);

var array = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
console.log(`The length of array is : ${array.length}`);

console.log(`====================Step 2: ========================`);
let element = array[0];
console.log(`The first element of array is : ${element}`);

let element2 = array[array.length-1]
console.log(`The last element of array is : ${element2}`);

console.log(`====================Step 3: ========================`);

let element3 = array[array.length-3]
console.log(`The last 3rd element of array is : ${element3}`);

// console.log(`====================Step 4: ========================`);

// for (let index = 0; index <array.length; index=index+2) {
//     const element = array[index];
//     if (index%2==0) {
        
//     }
//     console.log(`Even numbers are: ${index}`);
// }

console.log(`====================Step 10: ========================`);
var array = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
let available= array.includes(115);
console.log(`Number 115 is available in array: ${available}`);

console.log(`====================Step 11: ========================`);
let available2 = array.includes(23);
console.log(`Number 23 is available in array: ${available2}`);

console.log(`====================Step 12: ========================`);
var array = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];

array.splice(3, 0, 55,66)
console.log(`inserting numbers before index 3 are 55, 66  : ${array}`);

console.log(`====================Step 13: ========================`);

var array = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
let removedElement = array.splice(4);

console.log(array);

console.log(`After remove array is : ${removedElement}`);

let elementRemoved = array.splice(4, 3)

console.log(array);

console.log(`After remove array is :${elementRemoved}`);