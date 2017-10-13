/* GLOBAL VARIABLES */
var listOfProducts =
[
    {
        "title": "iPhone X",
        "description": "Latest and gratest smartphone from Apple.",
        "image": "iPhonex.png",
        "price": 11495
    },{
        "title": "One Plus 5",
        "description": "Sleek and powerful smartphone from One Plus",
        "image": "OnePlus5.png",
        "price": 4995
    },{
        "title": "Galaxy S8",
        "description": "Latest edge to edge smartphone from Samsung.",
        "image": "SamsungS8.png",
        "price": 7990
    },{
        "title": "LG V30",
        "description": "Super nice and beautiful smartphone from LG.",
        "image": "LGV30.png",
        "price": 7495
    }
];

createUIFromLoadedProducts();

// add more global variables when needed..

/* Get products from the json file and store it in a javascript variable */
/*fetch("./products.json")
.then(function(response) {
    return response.json();
})
.then(function(products) {
    listOfProducts = products;
    createUIFromLoadedProducts();
}); */

/** Uses the loaded products data to create a visible product list on the website */
function createUIFromLoadedProducts() {
    /* Check your console to see that the products are stored in the listOfProducts varible */
    console.log(listOfProducts);

    /*skrevs under lektion*/
var main = document.querySelector("#main");
console.log(main);
main.innerHTML = "Test";


    /* Add your code here, remember to brake your code in to
    smaller function blocks to reduce complexity and increase readability */

    /* Each function must have an explainetory comment like the one for this function, see row 15 */
    
    /* Feel free to remove these other comments */
}


/* Read the projects readme before you start! */
/* Good luck and have fun 🤓 */