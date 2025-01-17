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
export const updateTaskById = async (req, res) => {
    const id = req.params.id;
    const data = req.body

    let query = `UPDATE tasks SET title = '${data.title}', description = '${data.description}', status = '${data.status}' WHERE id = '${id}'`
    
    con.query(query, function(err) {
        if (err) {
            res.status(400).send({message: err.sqlMessage});
        }
        res.status(200).send({
            message: 'Task updated'
        })
    });
}

export const updateTaskStatusById = async (req, res) => {
    const id = req.params.id;

    let query = `UPDATE tasks SET status = NOT status WHERE id = '${id}'`
    
    con.query(query, function(err) {
        if (err) {
            res.status(400).send({message: err.sqlMessage});
        }
        res.status(200).send({
            message: 'Task updated'
        })
    });
}