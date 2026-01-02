let url = "http://localhost:3000"


function showProducts(array){
    productsCard = ""; 
    
    array.forEach(products =>{
        productsCard += `
        <div class="card-products">
        <img src="${products.route_img}" alt="image_products">
        <h3>${products.name}</h3>
        <p>$${products.price}</p>
        <p>${products.active}</p>
        </div>
        `;
    });
    listProducts.innerHTML = productsCard;
  
}

async function getProducts() {
    try{
        let response = await fetch(`${url}/api/products`);
        let data = await response.json();
        let products = data.payload;
        showProducts(products)
        console.table(products)
    }catch(e){
        console.log(e)
        res.status(500).json({
            error:"error al obtener productos"
        })};
}
getProducts()
