

console.log(`=======================step 1 : ==================================`);
function vowelcount(str){
    let count = 0;
    for (let index = 0; index < str.length; index++) {

        let char = str.charAt(index);

        if (` char==a || char==e || char==i || char==o || char==u ||
              char==A || char==E || char==I || char==O || char==U ||`) {
            console.log(char);
            count = count +1;
            
        }
        
    }
    console.log(`Total number of vowels is: ${count}`);

}
vowelcount(`I am very good IT developer`);


// // WAP to get the sum of numbers from 0 to 20

// let sum = function(){

//     let totalSum = 0;
 
//      for (let index = 1; index <=20; index++) {
 
//          totalSum = totalSum + index;
 
//      }
 
//      console.log(`Sum of first 20 numbers is : ${totalSum}`);
 
//  }
 
//  sum();
 

console.log(`=======================step 2 : ==================================`);

 let sum= function() {

    let sumOfCube = 0;
    for (let index = 1; index <=5; index=index+1) {

        sumOfCube = sumOfCube + index * index * index;
    }
        console.log(`The cube to 1 to 5 is : ${sumOfCube}`);

    }
sum();
console.log(`=======================step 3 : ==================================`);

function oddPositionedChars(str) {

    for (let index = 0; index < str.length; index++) {
         const char = str.charAt(index);

         if (index%2!=0 && char!=` `) {
            console.log(`only odd positioed stats is : ${index}`);
            
        }
        
        
    }
    
    
}
 oddPositionedChars(`Hard work always pays back`);
 oddPositionedChars(`Soon I will be aAngular IT champ`);
console.log(`=======================step 4 : ==================================`);

function reverseString(str){
    reverse ="";

    for (let index = str.length-1; index >=0; index--) {
        const char = str.charAt(index);
        if (char != ``) {
            reverse = reverse.concat(char);
        }
        
    }
   console.log(reverse);
    
}

reverseString (`Hard work always pays back`);
reverseString (`Soon I will be aAngular IT champ`)






            
       
