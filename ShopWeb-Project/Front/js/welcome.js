let button_user = document.getElementById("button_user");
let button_admin = document.getElementById("button_admin");

button_user.addEventListener("click", function(){
    window.location.href = "/user/login_user.html";
})

button_admin.addEventListener("click", function(){
    window.location.href = "login_admin"
})
