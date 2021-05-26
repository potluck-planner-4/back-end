const express = require('express');
const usersRouter = require("./routers/users-router")
const potluckRouter = require("./routers/potluck-router")

const server = express();

server.use(express.json())

server.use(usersRouter)
server.use(potluckRouter)

//error middleware
server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong",
    })
})

module.exports = server;