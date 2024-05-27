function validarFormulario() {
    let valor;
    let elemento;

    valor = document.getElementById("nombre").value;
    if (valor == null || valor.length == 0) {
        document.getElementById('msgErrorNombre').innerHTML = "¡Tenes que completar el nombre!";
        elemento = document.getElementById('nombre');
        elemento.focus();
        return false;
    }
    document.getElementById('msgErrorNombre').innerHTML = "";

    valor = document.getElementById("telefono").value;
    if (isNaN(valor) || valor.length <= 9) {
        document.getElementById('msgErrorTelefono').innerHTML = "¡Ingresá un celular válido!";
        elemento = document.getElementById('telefono');
        elemento.value = "";
        elemento.focus();
        return false;
    }
    document.getElementById('msgErrorTelefono').innerHTML = "";

    valor = document.getElementById("email").value;
    if (!(/^[^@]+@[^@\.]+\.[^@]+$/.test(valor))) {
        document.getElementById('msgErrorEmail').innerHTML = "¡Ingresá un email válido!";
        elemento = document.getElementById('email');
        elemento.value = '';
        elemento.focus();
        return false;
    }
    document.getElementById('msgErrorEmail').innerHTML = "";

    valor = document.getElementById("motivo").value;
    if (valor == null || valor.length == 0) {
        document.getElementById('msgErrorMotivo').innerHTML = "Por favor, seleccioná el motivo del contacto.";
        elemento = document.getElementById('motivo');
        elemento.focus();
        return false;
    }
    document.getElementById('msgErrorMotivo').innerHTML = "";

    valor = document.getElementById("mensaje").value;
    if (valor == null || valor.length == 0) {
        document.getElementById('msgErrorComentario').innerHTML = "¡Dejanos tu mensaje!";
        elemento = document.getElementById('mensaje');
        elemento.focus();
        return false;
    }
    document.getElementById('msgErrorComentario').innerHTML = "";

    // Mostrar mensaje de agradecimiento y limpiar formulario
    document.getElementById('alertContainer').innerHTML = [
        `<div class="alert alert-success alert-dismissible" role="alert">`,
        `   <div>¡Gracias por contactarnos! Responderemos a la brevedad.</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');
    document.getElementById("formulario").reset();

    return false;
}