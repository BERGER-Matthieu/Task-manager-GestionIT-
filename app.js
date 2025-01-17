import express from "express";
import bodyParser from "body-parser";

import * as task from "./Business/task.js";

//Start express
const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Get routes
app.get("/t", (req, res) => {
    res.send("Hallo")
})

//Task routes
app.post("/createTask", task.post.insertTask)

app.post("/updateTaskById/:id", task.update.updateTaskById)
app.post("/updateTaskStatusById/:id", task.update.updateTaskStatusById)

app.delete("/deleteTaskById/:id", task.delete.deleteTaskById)

app.get("/getTaskById/:id", task.get.getTaskById)
app.get("/getTaskByStatus/:status", task.get.getTaskByStatus)
app.get("/getTaskByTitle/:title", task.get.getTaskByTitle)
app.get("/getTaskByDescription/:description", task.get.getTaskByDescrtiption)


app.listen(process.env.PORT || 8080, () => {
    console.log("Serveur démarré sur le port 8080");
})