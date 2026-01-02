let cancel = document.getElementById("cancel");
let cartProducts = document.getElementById("cartProducts");
let data = document.getElementById("data");
let buy = document.getElementById("buy");
const { jsPDF } = window.jspdf;
const doc = new jsPDF();
const pageWidth = doc.internal.pageSize.getWidth();

cancel.addEventListener("click",function(){

    window.location.href = "../user/shop.html";
})

let cart = JSON.parse(localStorage.getItem("cart"));
console.log(cart)

function showCart() {
    let cardcart = "";
    let total = 0;
    let container = []
    let counter = 0
    
    cart.forEach((products, i) => {
        let subtotal = products.price * products.quantity;
        total += subtotal;
        
        cardcart += `
        <li class="item-cart">
        <img id= "item-photo" src="${products.route_img}"></img>
        <p> ${products.name} x${products.quantity} - $${subtotal}</p>
        </li>`;
        let content = `${products.name} x${products.quantity} - $${subtotal}`;
        container.push(content);

        counter += 10;
    });
    doc.text("Productos:",pageWidth / 2,40, {align:"center"})
    doc.text(container, pageWidth / 2 , 50, {align:"center"});
    doc.text(`Total: $${total}`,pageWidth / 2,counter + 50, {align:"center"});
    
    cartProducts.innerHTML = cardcart;
    
    document.getElementById("total").innerText = `Total: $${total}`;

    return container
}

function showData(){
    let companyName = "GEAR UP";
    let userNameValue = JSON.parse(localStorage.getItem("userName"));
    let date = new Date().toLocaleString();
    let arrayUserData = [companyName, date, userNameValue].join("                              ")
    
    let containerData = `
    <p>${companyName}</p>
    <p id="userName">User: ${userNameValue}</p>
    <p>Date: ${date}</p>
    `
    document.getElementById("data").innerHTML = containerData;
    return arrayUserData
}


buy.addEventListener("click", function(){

    let decision = confirm("Quiere confirmar la compra?")
    if(decision === true){
        /*Se hace el pdf*/
        doc.text(showData(), 10, 10);
        doc.save("ticket.pdf");
        localStorage.clear("cart");
        localStorage.clear("userName");
        window.location.href = "/";
    }else{
        alert("Compra cancelada")
        window.location.href = "shop.html";
    }
})

showCart()
showData()
