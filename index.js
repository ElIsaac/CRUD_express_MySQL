const bodyParser = require("body-parser");
const express = require("express");
const app =express()

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.set("port", 4000)

app.use(require("./rutas"))

app.listen(app.get("port"), ()=>{
    console.log("server on port "+app.get("port"))
})