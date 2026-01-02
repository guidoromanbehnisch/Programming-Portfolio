let url = "http://localhost:3000";
let modify_product_box = document.getElementById("modify_product_box")
let newForm = document.getElementById("newForm");

//Encontrar producto
modify_product_box.addEventListener("submit", async (event) =>{
    event.preventDefault();

    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData.entries())
    let idProd = data.id;
    try{
        let response = await fetch(`${url}/api/products/${idProd}`)
        let rows = await response.json();

        if(response.ok){
            let product = rows.payload[0]
            console.log(product)
            createForm(product)
        }else{
            console.log("error: producto no encontrado");
        }
    }catch(e){
        console.log(e);
        alert("Producto no encontrado")
    }

})

//Mostrar y editar producto
function createForm(product){
    let updateForm="";
    updateForm=`
    <form id="form_updated">
            <input type="hidden" name="id" id="id" value="${product.id}" required>
            <input type="text" name="name" id="name" value="${product.name}" required>
            <input type="text" name="price" id="price" value="${product.price}" required>
            <input type="text" name="route_img" id="route_img" value="${product.route_img}" required>
            <select name="category" id="category" ">
                <option value="mouse">Mouse</option>
                <option value="keyboard">Teclado</option>
            </select>
            <select name="active" id="active">
                <option value="0">0</option>
                <option value="1">1</option>
            </select>
            <input type="submit" id="update_Button" value="Modificar">
        </form>
    `
    newForm.innerHTML = updateForm;
    form_updated = document.getElementById("form_updated");
    document.getElementById("category").value = product.category;
    document.getElementById("active").value = product.active;

    form_updated.addEventListener("submit", async (event) =>{
        event.preventDefault();

        let formData = new FormData(event.target);
            let data = Object.fromEntries(formData.entries())

            try {
                let response = await fetch(`${url}/api/products/`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                });

                let result = await response.json();
                console.log(result);
                window.location.href = "dashboard"

            } catch (e) {
                console.log(e);
            }

        })
}