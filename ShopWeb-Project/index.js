import express from "express"
const app = express();

import enviroments from "./Back/src/api/config/enviroments.js";
import cors from "cors";

app.use(express.json());
app.use(cors());

import {productRoutes, viewRoutes} from "./Back/src/api/routes/index.js"

const PORT = enviroments.port;

app.listen(PORT, () =>{
    console.log("Servidor iniciado en puerto:", PORT);
})

//Llamamos a productRoutes que redireccionara a la funcion que se quiera ejecutar
app.use("/api/products", productRoutes);

import { join, __dirname } from "./Back/src/api/utils/index.js";

app.use(express.static(join(__dirname, "src/public")))
app.use(express.static(join(__dirname,"../Front")))

app.set("view engine", "ejs")
app.set("views", join(__dirname, "src/views"));

app.use("/",viewRoutes)
