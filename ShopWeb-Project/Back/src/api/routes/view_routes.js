import { Router } from "express";


const router = Router();

router.get("/dashboard",(req, res) =>{
    res.render("dashboard",{ 
        title: "Dashboard" 

    });
});

router.get("/add_product",(req,res) =>{
    res.render("add_product",{
        title: "Agregar"
    });
});

router.get("/login_admin",(req,res) =>{
    res.render("login_admin",{
        title: "Login"
    });
});

router.get("/modify_product",(req,res) =>{
    res.render("modify_product",{
        title: "Modificar"
    });
});

router.get("/delete_product",(req,res) =>{
    res.render("delete_product",{
        title: "Borrar"
    });
});


export default router;