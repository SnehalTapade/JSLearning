

let sbiBank ={
    bankName : "SBI Bank",
    location : "Pune",
    accountNo : 12345678,
    ifscNo : "SBIN00080", 
    interestRate : 12,
    showDetails(){

        console.log(this.bankName, this.location);
    }

}

let axisBank ={
    bankName : "AXIS Bank",
    location : "Wakad",
    accountNo : 99995678,
    ifscNo : "AXIS00080", 
    interestRate : 10 ,
    showDetails(){
        console.log(this.bankName, this.location);
        
    }
}

let hdfcBank ={
    bankName : "HDFC Bank",
    location : "Mumbai",
    accountNo : 111156889,
    ifscNo : "HDFC00080", 
    interestRate : 8,
    showDetails(){

        console.log(this.bankName, this.location);
    }
}

let yesBank ={
    bankName : "YES Bank",
    location : "Latur",
    accountNo : 88853332,
    ifscNo : "YES00080", 
    interestRate : 6,
    showDetails(){

        console.log(this.bankName, this.location);
    } 
}

sbiBank.showDetails();

axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();