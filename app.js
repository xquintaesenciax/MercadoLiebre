const express = require("express");
const app = express()

app.use("/static", express.static(__dirname + "/public"))


app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/register", (req, res)=>{
    res.sendFile(__dirname + "/views/register.html")
})


app.listen(3000, ()=> {
    console.log("Servidor corriendo")
})