const express = require("express")
const ejs = require("ejs")
const path = require('path');
const app = express()
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public'), {
    etag: false,
  }));
app.listen(3000, ()=>{
    console.log("hola")
})
app.get("/", (req, res)=>{
    res.send("Hola")
})