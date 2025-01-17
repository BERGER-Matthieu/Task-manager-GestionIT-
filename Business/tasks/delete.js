import mysql from "mysql";
import dotenv from "dotenv";

//Get dotenv var
dotenv.config()

//Configure mysql conn
var con = mysql.createConnection({
    host: process.env.SERVER,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

//Queries
export const deleteTaskById = async (req, res) => {
    const id = req.params.id;

    let query = `DELETE FROM tasks WHERE id = '${id}'`
    
    con.query(query, function(err) {
        if (err) {
            res.status(400).send({message: err.sqlMessage});
        }
        res.status(200).send({
            message: 'Task deleted'
        })
    });
}