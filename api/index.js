const express = require('express');
const axios = require("axios")

const server = express();

server.get('/', async (req, res) => {
    try {
        const { data } = await axios("http://worldtimeapi.org/api/timezone")
        res.json(data)
    } catch (error) {
        res.sendStatus(500)
    }
});

server.listen(3001, () => {
    console.log('Servidor escuchando en http://localhost:3001');
});
