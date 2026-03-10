let basefare = 50;
let perKMrate = 15;
let baseKM = 2;

function regularFare(){

let pickup = document.getElementById("pickup").value;
let dropoff = document.getElementById("dropoff").value;
let distance = Math.abs(dropoff - pickup);
let fare;

if(distance <= baseKM){ fare = basefare; }

else{ fare = basefare + ((distance-baseKM)*perKMrate); }
document.getElementById("result").innerHTML = fare.toFixed(2);

}


function discountFare(){

let pickup = document.getElementById("pickup").value;
let dropoff = document.getElementById("dropoff").value;
let distance = Math.abs(dropoff - pickup);
let fare;

if(distance <= baseKM){ fare = basefare; }
else{ fare = basefare + ((distance-baseKM)*perKMrate); }

fare = fare * 0.8;
document.getElementById("result").innerHTML = fare.toFixed(2);

}