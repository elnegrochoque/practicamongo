function campoRequerido(elemento) {
    if (elemento.value === "") {
        elemento.className = "form-control is-invalid";
        return false;
    } else {
        elemento.className = "form-control is-valid";
        return true;
    }
}

function validarMail(input) {
    let expresion = /\w+@\w+\.[a-z]{2,4}$/;
    if (input.value != "" && expresion.test(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}

function validarNumeros(input) {
    if (input.value != "" && !isNaN(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }

    
}

function validarCantidadCaracteres(input) {
    if (input.value != "" && input.value.length >= 10) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}

let checkbox = document.getElementById("checkTermino");


checkbox.addEventListener("change", validarCheck);

function validarCheck() {
    //console.log(checkbox.checked)
    if (checkbox.checked) {
        //if(checkbox.checked == true)
        checkbox.className = "form-check-input is-valid";
        return true;
    } else {
        checkbox.className = "form-check-input is-invalid";
        return false;
    }
}

function validarGeneral(event) {
    event.preventDefault();
    //console.log('dentro de la funcion validar general' + event);

    if (
        campoRequerido(document.getElementById("nombre")) &&
        validarMail(document.getElementById("email")) &&
        validarCantidadCaracteres(document.getElementById("consulta")) &&
        validarNumeros(document.getElementById("telefono")) &&
        validarCheck()
    ) {
        enviarMail();
        let alerta = document.getElementById("mensajeEnvio");
        alerta.className = "alert alert-success m-3";
        alerta.innerHTML = "Su consulta fue enviada correctamente";
    } else {
        let alerta = document.getElementById("mensajeEnvio");
        alerta.className = "alert alert-danger m-3";
        alerta.innerHTML = "Su consulta no fue enviada correctamente";
    }
}