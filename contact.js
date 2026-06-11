$(document).ready(function(){

$("#contactForm").submit(function(e){

e.preventDefault();

let name = $("#name").val().trim();
let email = $("#email").val().trim();
let phone = $("#phone").val().trim();
let message = $("#message").val().trim();

if(name === ""){
alert("Please Enter Your Name");
return;
}

if(email === ""){
alert("Please Enter Your Email");
return;
}

if(phone === ""){
alert("Please Enter Your Phone Number");
return;
}

if(message === ""){
alert("Please Enter Your Message");
return;
}

alert("Form Submitted Successfully");

$("#contactForm")[0].reset();

});

});