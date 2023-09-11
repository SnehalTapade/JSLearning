

var marriageEligibility = function(gender, age) {


    if (gender="other"&& age>=100) {
        console.log(`Invalid Data`);

    }

if (`gender= "male" && age>=21 || gender= "female" && age>=21`) {
    console.log(`congratulations ${gender} you are eligible for marriage`);
} else {
    console.log(`${gender} you are not eligible for marriage`);
}

}
//marriageEligibility("other");
marriageEligibility('female', 8);