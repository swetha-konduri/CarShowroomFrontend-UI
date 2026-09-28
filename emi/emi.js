function calculateEMI(){

let principal =
parseFloat(document.getElementById("amount").value);

let annualRate =
parseFloat(document.getElementById("rate").value);

let years =
parseFloat(document.getElementById("years").value);

if(isNaN(principal) || isNaN(annualRate) || isNaN(years)){
    alert("Please Fill All Fields");
    return;
}

let monthlyRate =
annualRate / 12 / 100;

let months =
years * 12;

let emi =
(principal * monthlyRate *
Math.pow(1 + monthlyRate, months))
/
(Math.pow(1 + monthlyRate, months) - 1);

document.getElementById("result").innerHTML =
"Monthly EMI: ₹" + emi.toFixed(2);

}