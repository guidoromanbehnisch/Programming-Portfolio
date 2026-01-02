let button_accept = document.getElementById("button_accept");
let button_cancel = document.getElementById("button_cancel");

button_accept.addEventListener("click", function(){
    let inputName = document.getElementById("inputName").value.trim();
    localStorage.setItem("userName", JSON.stringify(inputName))
    let onlyLetters = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;//regex
    
    if(onlyLetters.test(inputName)){
        window.location.href = "../user/shop.html"

    }else{
        console.log("nombreinvalido")
        alert("Por favor ingrese solo letras");
    }
})

button_cancel.addEventListener("click", function(){
    window.location.href = "/"
})

