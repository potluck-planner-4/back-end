const express = require('express');
//require routers

const server = express();

server.use(express.json())
//use routers
// server.use()
// server.use()

//error middleware
server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong",
    })
})

module.exports = server;