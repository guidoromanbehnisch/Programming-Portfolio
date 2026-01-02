import connection from "../database/db.js";

const selectAllProducts = () =>{
    const sql = `SELECT * FROM products`;
    return connection.query(sql);
}

const filterAllProducts = (id) =>{
    const sql = `SELECT * FROM products WHERE id = ?`
    return connection.query(sql, [id]);
}

const modifyProductSQL = (name,price,route_img,category,active, id) =>{
    const sql = `UPDATE products SET name = ?, price = ? , route_img = ?, category = ? , active = ?
                WHERE id = ?`
    return connection.query(sql,[name,price,route_img,category,active, id]);
}

const createProducts = (name,price,route_img,category,active) =>{
    const sql = `INSERT INTO products (name,price,route_img,category,active) VALUES (?,?,?,?,?)`
    return connection.query(sql,[name,price,route_img,category,active]);
}

const deleteProducts = (id) =>{
    const sql = `DELETE FROM products WHERE id = ?`;
    return connection.query(sql, [id]);
}

export default{
    selectAllProducts,
    filterAllProducts,
    modifyProductSQL,
    createProducts,
    deleteProducts
}