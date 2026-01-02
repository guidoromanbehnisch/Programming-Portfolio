let url = "http://localhost:3000"
let shopProducts = []
getProducts()

/*FUNCIONALIDADES DEL ARRAY PRODUCTOS*/



function showProducts(array){
    productsCard = ""; 
    
    array.forEach(products =>{
        if (products.active === 1){
            productsCard += `
            <div class="card-products">
            <img src="${products.route_img}" alt="image_products">
            <h3>${products.name}</h3>
            <p>$${products.price}</p>
            <button onclick="addToCart(${products.id})">Agregar al carrito</button>
            </div> 
            `;
        }
    });
    listProducts.innerHTML = productsCard;
    console.log(array);
}

async function getProducts() {
    try{
        let response = await fetch(`${url}/api/products`);
        console.log(response)
        let data = await response.json();
        let products = data.payload;
        showProducts(products)
        console.table(products)
        shopProducts = products
    }catch(e){
        console.log(e)
        res.status(500).json({
            error:"error al obtener productos"
        })};
}


/**
 * Permite filtrar y mostrar productos en tiempo real según el texto ingresado en el buscador.
 * 
 * Escucha el evento "input" del campo de búsqueda y compara el texto ingresado
 * con los nombres de los productos de la tienda. Muestra únicamente aquellos
 * cuyos nombres coinciden parcial o totalmente con el texto buscado.
 * 
 * Cada resultado genera dinámicamente una card con su imagen, nombre, precio
 * y un botón para agregar el producto al carrito.
 *
 * @returns {void} No devuelve ningún valor, actualiza dinámicamente el listado de productos en el DOM.
 */

let searchBar = document.getElementById("searchBar");

// Captura el o los valores que se ponga en la barra de busqueda y filtra el array
searchBar.addEventListener("keyup", function(){
    let searchValue = searchBar.value.toLowerCase();

    let productsFiltered = shopProducts.filter(product => product.name.toLocaleLowerCase().includes(searchValue));
    showProducts(productsFiltered)
})

/*FUNCIONALIDADES DEL CARRITO */
let list = document.getElementById("list");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
showCart(); // verifica si hay algo guardado sino arranca vacio

/**
 * Agrega un producto al carrito según su ID.
 * 
 * Si el producto ya existe en el carrito, aumenta su quantity en 1.
 * Si no existe, lo agrega con quantity inicial igual a 1.
 * 
 * Luego actualiza la vista del carrito y guarda los datos en localStorage.
 *
 * @param {number} id - El ID único del producto seleccionado.
 * @returns {void} No devuelve valor, pero actualiza el estado global del carrito.
 */
function addToCart(id){
    let selectProduct = shopProducts.find(products => products.id == id);

    
    let productsCart = cart.find(item => item.id == id);

    if (productsCart) {
    
        productsCart.quantity += 1;
    } else {
    
        cart.push({...selectProduct, quantity: 1 });
    }

    console.log(cart); 
    showCart();
} 

/**
 * Muestra el contenido actual del carrito en pantalla y actualiza el total.
 * 
 * Recorre todos los productos del carrito, calcula los subtotales y 
 * el total general. Luego construye dinámicamente el HTML de cada 
 * producto y lo inserta en el contenedor del carrito.
 * 
 * Además, guarda el estado actualizado del carrito en localStorage
 * para mantener la persistencia de datos al recargar la página.
 * 
 * @returns {void} No devuelve ningún valor, actualiza el DOM y localStorage.
 */
function showCart() {
    let cardcart = "";
    let total = 0;

    cart.forEach((products, i) => {
        let subtotal = products.price * products.quantity;
        total += subtotal;

        cardcart += `
        <li class="item-cart">
        <img id= "item-photo" src="${products.route_img}"></img>
        <p> ${products.name} x${products.quantity} - $${subtotal}</p>
        <button id="btn-delete" onclick="deleteProduct(${i})">Eliminar</button>
        </li>`;
    });

    list.innerHTML = cardcart;

    document.getElementById("total").innerText = `Total: $${total}`;


    localStorage.setItem("cart", JSON.stringify(cart));
}



/**
 * Elimina o decrementa un producto del carrito según su índice.
 * 
 * Si el producto tiene más de una unidad, reduce su quantity en 1.
 * Si solo queda una unidad, lo elimina completamente del carrito.
 * 
 * Luego actualiza la vista del carrito y el estado almacenado en localStorage.
 *
 * @param {number} index - Posición del producto dentro del array `carrito`.
 * @returns {void} No devuelve valor, solo actualiza el DOM y la lista del carrito.
 */
function deleteProduct(index) {
    let product = cart[index];

    // Si hay más de una unidad, resta 1
    if (product.quantity > 1) {
        product.quantity -= 1;
    } 
    // Si solo hay una, lo elimina del array
    else {
        cart.splice(index, 1);
    }

    showCart();
}





let btnClear = document.getElementById("btnClear");
btnClear.addEventListener("click", deleteAllProducts);



/**
 * Vacía completamente el carrito de compras.
 * 
 * Elimina todos los productos del array `carrito` y 
 * borra la información guardada en `localStorage`.
 * 
 * Luego actualiza la vista llamando a `showCart()` 
 * para reflejar el estado vacío.
 *
 * @returns {void} No devuelve ningún valor, solo limpia y actualiza el carrito.
 */
function deleteAllProducts() {
    cart = []; 
    localStorage.removeItem("cart"); 
    showCart();
}

let buy = document.getElementById("buy")
buy.addEventListener("click", function(){
    if(cart.length >= 1){
        window.location.href = "../user/ticket.html"
    }
})