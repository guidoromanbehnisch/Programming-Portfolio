let formDelete = document.getElementById("formDelete");
let url = "http://localhost:3000";
let delete_product_box = document.getElementById("delete_product_box");

delete_product_box.addEventListener("submit", async (event) =>{
    event.preventDefault();

    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData.entries())
    console.log(data)
    let idProd = data.id;
    try{
        let response = await fetch(`${url}/api/products/${idProd}`)
        let rows = await response.json();

        if(response.ok){
            let product = rows.payload[0]
            console.log(product)
            deleteProduct(product)
        }else{
            console.log("error: producto no encontrado");
        }
    }catch(e){
        console.log(e);
        alert("Producto no encontrado")
    }

})

function deleteProduct(product){
    let updateForm="";
    updateForm=`
    <form id="form_to_delete">
            <input type="text" name="id" id="id" value="${product.id}" readonly>
            <input type="text" name="name" id="name" value="${product.name}" readonly>
            <input type="text" name="price" id="price" value="${product.price}" readonly>
            <input type="text" name="route_img" id="route_img" value="${product.route_img}" readonly>
            <input type="text" name="category" id="category" value="${product.category}" readonly>
            <input type="number" name="active" id="active" value="${product.active}" readonly>
            <input type="submit" id="delete_Button" value="Borrar">
        </form>
    `
    formDelete.innerHTML = updateForm;
    let form_to_delete = document.getElementById("form_to_delete");

    form_to_delete.addEventListener("submit", async (event) =>{
        event.preventDefault();
        let decision = confirm("Esta seguro de borrar este producto?")
        if(decision === true){
            let formData = new FormData(event.target);
            let data = Object.fromEntries(formData.entries())
    
                try {
                    let response = await fetch(`${url}/api/products/${data.id}`, {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data)
                    });
    
                    let result = await response.json();
                    console.log(result);
                    window.location.href = "dashboard"
    
                } catch (e) {
                    console.log(e);
                }
        }else{
            window.location.href = "delete_product"
        }


        })
}