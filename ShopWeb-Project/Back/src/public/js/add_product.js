let form = document.getElementById("form_add_product");
form.addEventListener("submit", async (event) =>{
    event.preventDefault();

    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData.entries())
    try{
        let response = await fetch(`http://localhost:3000/api/products`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
                
        })
        if(response.ok){
            let result = await response.json();
            console.log(result.message)
            alert("Se creo el producto correctamente");
            window.location.href = "dashboard";
        }
    }catch(e){res.status(500).json({
            error:"no se creo el producto"
        });
        alert("No se creo el producto");
        }
})


