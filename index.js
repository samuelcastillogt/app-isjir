const express = require("express")
const ejs = require("ejs")
const path = require('path');
const app = express()
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public'), {
    etag: false,
  }));
  var firebase = require("firebase/app");
  require("firebase/auth");
  require("firebase/firestore");
  var firebaseConfig = {
      apiKey: "AIzaSyBTlIW_1NAeMeSDOdCc4AICtGxoYbaUyuw",
      authDomain: "directorio-bc73c.firebaseapp.com",
      databaseURL: "https://directorio-bc73c.firebaseio.com",
      projectId: "directorio-bc73c",
      storageBucket: "directorio-bc73c.appspot.com",
      messagingSenderId: "584037980083",
      appId: "1:584037980083:web:3d1a9f630024b3c3565dc6",
      measurementId: "G-PL8N063SXF"
    };
    firebase.initializeApp(firebaseConfig);
app.listen(3000, ()=>{
    console.log("hola")
})
app.get("/", (req, res)=>{
    res.render("home")
})
app.get("/singup", (req, res)=>{
    res.render("singup")
})
app.get("/login", (req, res)=>{
    res.render("login")
})
app.get("/desktop", (req, res)=>{

    var user = firebase.auth().currentUser;
if (user) {
    res.render("desktop", firebase.auth().currentUser)
} else {
  res.send("error")
}
   
})