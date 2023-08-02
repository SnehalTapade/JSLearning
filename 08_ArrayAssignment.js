

var array = ["Banana","Orange", "Apple", "Mango","WaterMelon"];
console.log(array);

console.log(`====================Step 1: ========================`);
 
var first = array[0];
console.log(`The first element is : ${first}`);

var last = array[array.length-1];
console.log(`The last element is : ${last}`);

console.log(`====================Step 2: ========================`);

array.unshift("Papaya");
console.log(`the element before Banana is : ${array} `);

console.log(`====================Step 3: ========================`);

var array = ["Papaya","Banana","Orange", "Apple", "Mango","WaterMelon"];
let remove = array.splice(4)
console.log(array);
console.log(remove);

console.log(`====================Step 4: ========================`);
var array = ["Banana","Orange", "Apple", "Mango","WaterMelon"];
array.push("Pineapple")

console.log (`insert an element Pineapple  at the last position : ${array}`);
console.log(`====================Step 5: ========================`);

var array = ["Banana","Orange", "Apple", "Mango","WaterMelon"];
array.splice(3,1, "DragonFruit")
console.log(`Insert an element -: ${array}`);

console.log(`====================Step 6: ========================`);

var array = ["Banana","Orange", "Apple", "Mango","WaterMelon"];
array.splice(1,0,"kiwi")
console.log(`Replace an element Orange with Kiwi: ${array}`);

// console.log(`====================Step 7: ========================`);
// var array = ["Banana","kiwi", "Orange", "Apple", "Mango","WaterMelon"];

// for (let index = 0; index <=4; index=index+1) {
//     const element = array[index];
    
    
// }
// console.log(index);

console.log(`====================Step 8: ========================`);

var array = ["Banana","Orange", "Apple", "Mango","WaterMelon"];
console.log(`Total number of elements in array is: ${array.length}`);
 var length = array.length-3;
 console.log(`The length of array is : ${length}`);