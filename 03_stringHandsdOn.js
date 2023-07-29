



function stringHandsOn() {

    var str = "     Hey you are doing good, keep it up       "; 
    console.log(`------------step 1:---------------------------------------------------------------------`);
    console.log( `Given string is  : ${str}`);

    console.log(`------------step 2:---------------------------------------------------------------------`);
    var length = str.length;
    console.log(str, `The lenth of string is  : ${length}`);

    console.log(`------------step 3:---------------------------------------------------------------------`);

    var greet = "     Hey you are doing good, keep it up       "; 

    var result = greet.trim();

    console.log(`Before Trim String length : ${greet.length},     After Trim string is :  ${result} ,  and it's length is ${result.length}`);
    
    console.log(`-----------------------step 4:-----------------------------------------------------------`);


    var greet = "     Hey you are doing good, keep it up       "; 
    console.log(`"     Hey you are doing good, keep it up       "`);

    var len = greet.length;
    var result = greet.trim();
    console.log(`The length of original string is :  ${len} , and After Trim string is :  ${result}`)

    var resultTrimEnd = greet.trimEnd();

var trimEndLength = resultTrimEnd.length; 

var endSpaces = greet.length - trimEndLength;

console.log(` End Spaces is : ${endSpaces} `);

console.log(`-----------------------step 5:-----------------------------------------------------------`);

var afterTrimResult = greet.trim();
var firstChar = afterTrimResult.charAt(0);
var lastChar = afterTrimResult.charAt(afterTrimResult.length-1);

console.log(`print first character is :  ${firstChar} and last character is : ${lastChar }`);

console.log(`-----------------------step 6:-----------------------------------------------------------`);

var totalWords = afterTrimResult.split(` `);
console.log(`The count of total word is :  ${totalWords}`);


console.log(`-----------------------step 7:-----------------------------------------------------------`);

var text = afterTrimResult.indexOf("good");
console.log(` index of word “good” is :  ${text}`);

console.log(`-----------------------step 8:-----------------------------------------------------------`);

var substring = afterTrimResult.slice(22)
console.log(`substring starting from index 22 is ${substring}`);

console.log(`-----------------------step 9:-----------------------------------------------------------`);

var endsWith = afterTrimResult.endsWith("up")
console.log(` string ends with word “up” ?? The result is : ${endsWith}`);

console.log(`-----------------------step 10:-----------------------------------------------------------`);
 
var startsWith = afterTrimResult.startsWith("Hey")

console.log(`string starts with word “Hey” ?? The result is :${startsWith}`);




   
}
stringHandsOn();