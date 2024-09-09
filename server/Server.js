const express = require("express");
const mysql = require("mysql");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "i40radio",
});
connection.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Conectado a la base de datos MySQL");
    }
});
app.post("/Comment", (req, res) => {
    const Email = req.body.email;
    const Comment = req.body.Comentario;
    connection.query('INSERT INTO comentarios(email,comentario) VALUES (?, ?)', [Email, Comment], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Comentario Eviado")
            console.log(result)
        }
    });
});
app.get("/GetCommnet", (req, res) => {
    connection.query('SELECT * FROM comentarios', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
    });
});
app.post("/UpdateCommnet", (req, res) => {
    const id = req.body.id;
    const Email = req.body.email;
    const Comment = req.body.Comentario;

    connection.query('UPDATE comentarios SET Email =?, comentario=? WHERE Id=?', [Email, Comment, id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Guardado")
        }
    });
});
app.listen(3001, () => {
    console.log("Servidor iniciado en el puerto 3001");
});