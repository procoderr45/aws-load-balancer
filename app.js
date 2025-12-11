const express = require("express");
const ip = require("ip");

const app = express();

app.use(express.json());

app.get("/ping", (req, res) => {
    res.status(200).send({
        message: "server working fine"
    })
})

app.get("/", (req, res) => {
    const serverIp = ip.address();

    res.json({
        message: `Response from ${serverIp}`,
    });
});
module.exports = app;
