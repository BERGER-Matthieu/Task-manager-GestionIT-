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
export const insertTask = async (req, res) => {
    const data = req.body

    let query = `INSERT INTO tasks (title, description, status, deadline) VALUES ('${data.title}', '${data.description}', ${data.status}, '${data.deadline}')`
    
    con.query(query, function(err) {
        if (err) {
            res.status(400).send({message: err.sqlMessage});
        }
        res.status(200).send({
            message: 'Task created'
        })
    });
}