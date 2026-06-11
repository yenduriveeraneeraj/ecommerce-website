const quantities =
document.querySelectorAll(".quantity");

function calculateTotal(){

let grandTotal = 0;

document.querySelectorAll("tbody tr")
.forEach(function(row){

let price =
parseInt(
row.querySelector(".price").textContent
);

let quantity =
parseInt(
row.querySelector(".quantity").value
);

let total = price * quantity;

row.querySelector(".itemTotal")
.textContent = total;

grandTotal += total;

});

document.getElementById("grandTotal")
.textContent = grandTotal;

}

quantities.forEach(function(input){

input.addEventListener("input",
calculateTotal);

});

calculateTotal();