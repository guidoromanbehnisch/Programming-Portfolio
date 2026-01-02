import enviroments from "../config/enviroments.js"
import mysql from "mysql2/promise"

let {db} = enviroments;

let connection = mysql.createPool({
    host: db.host,
    database: db.name,
    user: db.user,
    password: db.password
})

export default connection;