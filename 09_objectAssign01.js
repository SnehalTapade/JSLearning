

let professor = {

    name: "Mr.Ram",
    mobileNumber: 123456789,
    college: "COEP",
    address: "pune",
    degree: {
        engineering: "csc",
        PHD: "AdvComputing",
        country: "Germany",

        getdegree: function() {
            this.engineering; this.PHD; this.country 
        }
    } 

}

console.table(professor);

professor.certificates = [`"Hacker Rank Participation" , "Certificate in IFE course" , "Certificate in Adv Programming"`];

professor.degree.getdegree();

let exp= professor.totalExperience="14 years";
console.log(`adding new property totalExperience is  : ${exp}`);