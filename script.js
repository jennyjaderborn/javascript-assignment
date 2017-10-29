/* GLOBAL VARIABLES */
var listOfProducts;

/* Get products from the json file and store it in a javascript variable */
fetch("./products.json")
.then(function(response) {
    return response.json();
})
.then(function(products) {
    listOfProducts = products; // listOfProducts contains all products fron the jsonfile
    createUIFromLoadedProducts();
});
//This function create a div-element with the products
function createUIFromLoadedProducts() {
var productList = document.createElement("div");
productList.className = "productListClass";
//loop
for(var index = 0; index < listOfProducts.length;index++) {
    var productCard = createProductCard(listOfProducts[index]);
    productList.appendChild(productCard);
}
document.body.appendChild(productList);
}
//Create function to append childelement, and get the product visible on the site  
function createProductCard(listOfProducts) {
    var productCard = document.createElement("div")
    productCard.className = "productCardClass";
    productCard.id = "productCardId";

    var getProductTitle = document.createElement("h3");
    getProductTitle.innerText = listOfProducts.title;
    productCard.appendChild(getProductTitle);

    var getProductDescription = document.createElement("h4");
    getProductDescription.innerText = listOfProducts.description;
    productCard.appendChild(getProductDescription);

    var getProductImage = document.createElement("img");
    getProductImage.src = "assets/" + listOfProducts.image;
    productCard.appendChild(getProductImage);

    var getProductPrice = document.createElement("h5");
    getProductPrice.innerText = listOfProducts.price + " kr";
    productCard.appendChild(getProductPrice);

//Create buttonelement with text
    var getProductButton = document.createElement("button");
    getProductButton.innerText = " Lägg till i kundvagnen";
    getProductButton.onclick = function() {add()}
    productCard.appendChild(getProductButton);
    
    return productCard;
}

var count = 0
var step = 1;
var span = document.querySelector("span");

//This function makes the quantity(the number beside the shoppingcart in header) change when click add product
function add() {
    count = count + step
    span.innerText = count;
    alert("Din vara har lagts i varukorgen!");
}

