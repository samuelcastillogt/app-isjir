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
        document.getElementById("click").addEventListener("click", ()=>{
            console.log("hola")
            let email = document.getElementById("correo").value
            let password = document.getElementById("pass").value
            firebase.auth().signInWithEmailAndPassword(email, password)
            // let email = document.getElementById("correo").value
            // let password = document.getElementById("pass").value
.then((userCredential) => {
  // Signed in
  var user = userCredential.user;
  // document.getElementById("este").innerHTML=""
  // document.getElementById("este").innerHTML=``
  // console.log(user)
  window.location.href="/desktop.html"

})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
});
        } )