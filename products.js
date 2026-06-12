const categoryFilter =
document.getElementById("categoryFilter");

const priceRange =
document.getElementById("priceRange");

const priceValue =
document.getElementById("priceValue");

const products =
document.querySelectorAll(".product-card");


priceRange.addEventListener("input", function(){

priceValue.textContent = this.value;

filterProducts();

});

categoryFilter.addEventListener("change", function(){

filterProducts();

});


function filterProducts(){

let selectedCategory =
categoryFilter.value;

let selectedPrice =
priceRange.value;

products.forEach(function(product){

let category =
product.dataset.category;

let price =
product.dataset.price;

if(
(selectedCategory === "all" ||
category === selectedCategory)
&&
price <= selectedPrice
)
{
product.style.display = "block";
}
else
{
product.style.display = "none";
}

});

}

function addToCart(name, price){

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

cart.push({
name:name,
price:price,
quantity:1
});

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

alert(name + " Added To Cart");

}
