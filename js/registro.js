import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
let botonRegistro = document.getElementById("botonRegistro");
let modalInformativo = new bootstrap.Modal(document.getElementById('modalInformativo'))
console.log()

botonRegistro.addEventListener("click", function (event) {
  event.preventDefault();

  let correo = document.getElementById("correo").value;
  let password = document.getElementById("password").value;
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, correo, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user)
      // ...
      let textoInfo=document.getElementById("infoGeneral")
      let formulario=document.getElementById("formularioRegistro")
      //formulario.reset()
      textoInfo.textContent="Exito en el Resgistro"
      modalInformativo.show()
      setTimeout(function(){
        modalInformativo.hiden()
      },2000)
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      let textoInfo=document.getElementById("infoGeneral")
      textoInfo.textContent="Error: "+errorMessage
      modalInformativo.show()
    
    });
});
