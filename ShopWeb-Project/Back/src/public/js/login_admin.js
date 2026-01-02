let adminUsers = [
    { mail: "juanPereyra@gmail.com", password: "juanpera" },
    { mail: "admin@gearup.com", password: "12345" },
    { mail: "eze@gmail.com", password: "eze123" }
];


let button_accept = document.getElementById("button_accept");
let button_cancel = document.getElementById("button_cancel");

button_accept.addEventListener("click", function(){
    let inputMail = document.getElementById("inputMail").value.trim();
    let inputPassword = document.getElementById("inputPassword").value;

    let userFound = adminUsers.find(user =>
        user.mail === inputMail && user.password === inputPassword
    );

    if(userFound){
        window.location.href = "dashboard"

    }else{
        console.log("correo o contraseña invalida")
        alert("Correo o contraseña incorrecto, intente nuevamente");
    }
})

button_cancel.addEventListener("click", function(){
    window.location.href = "/"
})
