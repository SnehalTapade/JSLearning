// var interviewEligibility = function(gradScore, hscScore, sscScore, candidateName ){
//     var result = gradScore>=70 || hscScore>= 80 || sscScore >=90 
//      ? `Congrats ${candidateName} you are eligible for TCS interview.`
//      :  `Unfortunately you are not eligible for interview`;
//      console.log(result);
//  }
 
//  interviewEligibility(80, 86, 90, 'Mahi');
//  interviewEligibility(70, 65, 55, 'Gill');
//  interviewEligibility(60, 79, 88, 'Stew');



 function squareOfWordLength(str){
      var str = "JavaScript";
      var result = str.length
      console.log(`The length of string is : ${result}`);

      var word = result * result;
      console.log(`squareOfWordLength : ${word}`);
          
 }
  var word = squareOfWordLength("JavaScript");

  

 var word= squareOfWordLength("Google Chrome");
 var word= squareOfWordLength("Developer Smart");


 console.log(`================================`);

 var string = function(arg){

   var str = "I am angular developer";
   var result = str.length
   var res = str.split(" ")
   console.log(`The length of string is : ${result} and the words are ${res}` );

   var multiply = result * res
   console.log(`multiply by total no. of words : ${multiply}`);



 }
 string("I am angular developer");



