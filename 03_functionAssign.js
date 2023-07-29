

console.log('--------- Step 1 :--------------------------------------');

function name() {
}
name();
console.log('My name is Snehal');
      console.log('I am learning JS');


console.log('--------- Step 2 :-----------------------------------');

function personalDetails(firstName, lastName, collegeName) {
   
   
   
}
personalDetails ();
    
    console.log('my personal details are: ');     
   console.log('firstName: Snehal ');
   console.log('lastName: Tapade ');
   console.log('collegeName: Cocsit ');



   console.log('--------- Step 3 :-----------------------------');

    function swapValueDude(value1, value2) {

      console.log('before swap values are:  ' , 'value1', value1,'value2', value2);

      var temp = value1;
      value1 = value2;
      value2 = temp;
      console.log('After swap values are:  ' , 'value1', value1,'value2', value2);

    }
    swapValueDude( "virat" , "Anushka");
    swapValueDude( 1000, 2000);

    console.log('--------- Step 4 :---------------------------------');

    function addThreeValues(val1, val2, val3){
      var result = val1 + val2 + val3
      return result;

    }
    var sum = addThreeValues(10.23, 600,40);
    console.log('addtion is  :', sum);

    var sum = addThreeValues("Hello", "Good", "Morning");
    console.log('addtion is', sum);
 
    console.log('--------- Step 5 :---------------------------------------');


function bankDetails(bankName, accountNum, location, pinCode){
      console.log('bankName  :' , bankName, 'accountNum  :', accountNum, 'location  :', location, 'pinCode  :', pinCode);
}
bankDetails("CITY Bank", 12345, 'pune', 411057);
bankDetails("Axis Bank", 67890, 'mumbai', 67812);
bankDetails("HDFC Bank", 67823, 'pune', 411042, "open");

