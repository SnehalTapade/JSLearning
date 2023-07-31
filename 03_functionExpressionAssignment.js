
console.log(`---------------------------- Step 1 and 2: -------------------------------------`);
 var square = function(num){
        var result = num * num;
        console.log(`The square of number is :  ${result}`, typeof result);


}
square(5);
square(6);
square(25);
square(100);
square(567.09);
square(59);

console.log(`---------------------------- Step 3: -------------------------------------`);
var rectangle = function(length, width){
    var area = length+length * width+width;
    console.log(`The area of rectangle plot is : ${area}`);

}
rectangle(499, 917);

console.log(`---------------------------- Step 4: -------------------------------------`);

var swapvalues = function(num1, num2) {
    num1 = "Mahi";
    num2 = "Raina"
    console.log(`Before swap values are : `, `num1`, num1,    `num2`, num2);

    var temp = num1;
    num1 = num2;
    num2 = temp;

    console.log(`After swap values are : `, `num1`, num1,    `num2`, num2);


}
swapvalues("Mahi", "Raina");

console.log(`---------------------------- Step 4: -------------------------------------`);

var strOperation = function(str) {

    var leng = strOperation.length
    console.log(`The length of string is : ${leng}`);

    
}
var leng = strOperation("JS is the most popular language of Internet");
console.log(`The length of string is : ${leng}`);
