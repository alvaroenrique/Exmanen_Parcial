var no_coin = function(){   
    var nodo_login = document.getElementById("login");
    var nodo_ingresar = document.getElementById("ingresar");
    nodo_ingresar.classList.remove("mt-4")
    var n_span = document.createElement("span");
    n_span.textContent = "Usuario y/o contraseña no coinciden";
    nodo_login.insertBefore(n_span, nodo_ingresar);  
}

var abrir_registro = function(){
    var modal = document.getElementById("mimodal");
    modal.classList.remove("invisible");
    modal.classList.add("visible");
    modal.classList.add("animated");
    modal.classList.add("bounceInDown");
    modal.addEventListener("animationend", function(){
        modal.classList.remove("animated");
        modal.classList.remove("bounceInDown");
    })
}
var cerrar_registro = function(){
    var modal = document.getElementById("mimodal");
    modal.classList.remove("visible");
    modal.classList.add("invisible");
}

var main = function(){
    
    document.getElementById("crear_usuario").addEventListener("click", abrir_registro);
    document.getElementById("icon_cerrar").addEventListener("click", cerrar_registro)

}

window.onload = main;
