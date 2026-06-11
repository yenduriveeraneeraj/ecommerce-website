document.getElementById("checkoutForm")
.addEventListener("submit", function(e){

e.preventDefault();

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

let phone =
document.getElementById("phone").value;

let address =
document.getElementById("address").value;

let city =
document.getElementById("city").value;

let state =
document.getElementById("state").value;

let pincode =
document.getElementById("pincode").value;

if(
name === "" ||
email === "" ||
phone === "" ||
address === "" ||
city === "" ||
state === "" ||
pincode === ""
)
{
alert("Please Fill All Fields");
return;
}

window.location.href =
"order-confirmation.html";

});