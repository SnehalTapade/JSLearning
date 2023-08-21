

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
    } ,


    
}

console.log(professor);

professor.certificates = [`"Hacker Rank Participation" , "Certificate in IFE course" , "Certificate in Adv Programming"`];

professor.degree.getdegree();

let exp= professor.totalExperience="14 years";
console.log(`adding new property totalExperience is  : ${exp}`);


let modify= professor.degree.country ="India";
console.log(`After modifying  is : ${modify}`);

let newcertified= professor.certificates.push("Oracle certified");
console.log(newcertified);
