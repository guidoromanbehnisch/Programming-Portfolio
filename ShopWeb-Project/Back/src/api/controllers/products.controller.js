import ProductModels from "../models/product.models.js"

//Mostrar Productos
export const getAllProducts = async (req, res) => {
    try {
        const [rows] = await ProductModels.selectAllProducts();
        res.json({
            payload:rows
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en servidor" });
    }
};

//Filtrar productos
export const filterProducts = async (req, res) => {
    try {

        let { id } = req.params; // Obtengo el id;
        let [rows] = await ProductModels.filterAllProducts(id);


        res.status(200).json({
            payload: rows,
            message: rows.length === 0 ? "No se encontro producto" : "Producto encontrado"
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Error al obtener producto con ese id"
        });
    }
}

//Modificar productos
export const modifyProduct = async (req,res) => {
    try{
        let {name,price,route_img,category,active, id} = req.body;
        
        if (!name || !price|| !route_img || !category || (active == null) || !id) {
            console.log(name,price,route_img,category,active,id)
            return res.status(400).json({
                message: "Faltan parametros"
            })
        };
        let [rows] = await ProductModels.modifyProductSQL(name,price,route_img,category,active, id);
        res.status(200).json({
            message:"producto actualizado"
        }); 
        
        if (rows.affectedRows === 0) {
            return res.status(404).json({
                message: "Producto no encontrado"
            })
        }
    }catch(e){
        console.log(e)
        res.status(500).json({
            error:"error interno"
        }); 
}}

//Crear productos
export const createProduct = async (req,res) => {
    try{
        let {name,price,route_img,category,active} = req.body;
        let [rows] = await ProductModels.createProducts(name,price,route_img,category,active);
        res.status(200).json({
            message: "producto creado correctamente"
        });

    }catch(e){
        console.log(e)
        res.status(500).json({
            error:"no se creo el producto"
        }); 
}
}

//Borrar productos
export const deleteProduct = async (req,res) => {
    try{ 
        let { id } = req.params;
        let [rows] = await ProductModels.deleteProducts(id);

        if (rows.affectedRows === 0) {
            return res.status(404).json({
                message: "Producto no encontrado"
            })
        }

        res.status(200).json({
            message: `Producto eliminado correctamente id: ${id}`
        })


    }catch(e){
        console.log(e)
        res.status(500).json({
            error:"error interno"
        }); 
}
}