const express = require("express")
const app = express()

app.get("/", (req, res)=>{
    res.send("<div>BEM VINDO! <a href='/tchau'>FUI</a></div>")
})

app.get("/tchau", (req, res)=>{
    res.send("<div>BOA NOITE!</div><a href='/'>HOME</a>")
})

app.listen(3001)