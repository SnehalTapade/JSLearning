

var voteEligible = function (age){

    
    if (age<=0 ||  age> 130) {
        console.log('Invalid Data' );
    }

    if (age<18 ) {
        console.log("You are not eligible for vote");
    } else {
        console.log("You are eligible for vote");
    }


}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-100);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);