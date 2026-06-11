const searchInput =
document.getElementById("searchInput");

const searchBtn =
document.getElementById("searchBtn");

const products =
document.querySelectorAll(".searchable");

searchBtn.addEventListener("click", searchProducts);

searchInput.addEventListener("keyup", searchProducts);

function searchProducts(){

let searchValue =
searchInput.value.toLowerCase();

products.forEach(function(product){

let productName =
product.querySelector("h3")
.textContent
.toLowerCase();

if(productName.includes(searchValue))
{
product.style.display = "block";
}
else
{
product.style.display = "none";
}

});

}