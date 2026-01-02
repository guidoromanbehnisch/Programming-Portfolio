import {Router} from "express";
const router = Router();

import { createProduct, filterProducts, getAllProducts, modifyProduct, deleteProduct } from "../controllers/products.controller.js";

router.get("/", getAllProducts);

router.get("/:id", filterProducts);

router.put("/",modifyProduct);

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

export default router;