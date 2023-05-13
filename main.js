function login() {
    var user = document.getElementById("usuario").value;
    var password = document.getElementById("contrasena").value;

    if (user === "prueba" && password === "1234") {
        window.location = "index-2.html";
    } else {
        alert("Datos Incorrectos");
    }
}
