const cars = {

"BMW M4":{
price:"₹90,00,000",
rent:"₹15,000 / Day",
engine:"2993cc",
speed:"250 km/h"
},

"Audi R8":{
price:"₹2,00,00,000",
rent:"₹25,000 / Day",
engine:"5204cc",
speed:"330 km/h"
},

"Mercedes AMG GT":{
price:"₹1,50,00,000",
rent:"₹20,000 / Day",
engine:"3982cc",
speed:"315 km/h"
},

"Lamborghini Huracan":{
price:"₹4,00,00,000",
rent:"₹50,000 / Day",
engine:"5204cc",
speed:"325 km/h"
},

"Ferrari 488":{
price:"₹3,50,00,000",
rent:"₹45,000 / Day",
engine:"3902cc",
speed:"330 km/h"
},

"Mahindra Thar":{
price:"₹12,99,000",
rent:"₹3,500 / Day",
engine:"2184cc",
speed:"155 km/h"
},

"Toyota Fortuner":{
price:"₹38,00,000",
rent:"₹6,000 / Day",
engine:"2755cc",
speed:"190 km/h"
},

"Range Rover Sport":{
price:"₹1,20,00,000",
rent:"₹18,000 / Day",
engine:"2997cc",
speed:"250 km/h"
}

};

function compareCars(){

let car1 =
document.getElementById("car1").value;

let car2 =
document.getElementById("car2").value;

if(car1==="" || car2===""){
alert("Select 2 Cars");
return;
}

document.getElementById("result").innerHTML =

`
<table border="1" style="margin:auto;background:white;color:black;border-collapse:collapse;width:80%;">

<tr>
<th>Feature</th>
<th>${car1}</th>
<th>${car2}</th>
</tr>

<tr>
<td>Price</td>
<td>${cars[car1].price}</td>
<td>${cars[car2].price}</td>
</tr>

<tr>
<td>Rent</td>
<td>${cars[car1].rent}</td>
<td>${cars[car2].rent}</td>
</tr>

<tr>
<td>Engine</td>
<td>${cars[car1].engine}</td>
<td>${cars[car2].engine}</td>
</tr>

<tr>
<td>Top Speed</td>
<td>${cars[car1].speed}</td>
<td>${cars[car2].speed}</td>
</tr>

</table>
`;

}