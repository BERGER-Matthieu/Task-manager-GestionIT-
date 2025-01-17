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
export const getTaskById = async (req, res) => {
    const id = req.params.id;

    let query = `SELECT * FROM tasks WHERE id = '${id}'`
    
    con.query(query, function(err, response) {
        if (err) {
            res.status(400).send({message: err.sqlMessage});
        }
        res.status(200).send({
            message: 'Task gotten',
            data: response
        })
    });
}

export const getTaskByStatus = async (req, res) => {
    const status = req.params.status;

    let query = `SELECT * FROM tasks WHERE status = '${status}'`
    
    con.query(query, function(err, response) {
        if (err) {
            res.status(400).send({message: err.sqlMessage});
        }
        res.status(200).send({
            message: 'Task gotten',
            data: response
        })
    });
}

export const getTaskByTitle = async (req, res) => {
    const status = req.params.title;

    let query = `SELECT * FROM tasks WHERE title like '%${title}%'`
    
    con.query(query, function(err, response) {
        if (err) {
            res.status(400).send({message: err.sqlMessage});
        }
        res.status(200).send({
            message: 'Task gotten',
            data: response
        })
    });
}

export const getTaskByDescrtiption = async (req, res) => {
    const status = req.params.description;

    let query = `SELECT * FROM tasks WHERE description like '%${description}%'`
    
    con.query(query, function(err, response) {
        if (err) {
            res.status(400).send({message: err.sqlMessage});
        }
        res.status(200).send({
            message: 'Task gotten',
            data: response
        })
    });
}