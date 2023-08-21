const express = require("express")

const server = express();

server.listen(3001, () => {
    console.log("Servidor escuchando en http://localhost:3001")
})