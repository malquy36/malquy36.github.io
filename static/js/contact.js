function validarFormulario() {

    valor = document.getElementById("nombre").value;
            
    if( valor == null || valor.length == 0) 
    {
    
        document.getElementById('msgErrorNombre').innerHTML = "¡Tenes que completar el nombre!";
        elemento = document.getElementById('nombre');
        elemento.focus();
    
        return false;
    }
    document.getElementById('msgErrorNombre').innerHTML = "";

    valor = document.getElementById("telefono").value;
        
        if( isNaN(valor) || valor.length<=9) 
        {
            document.getElementById('msgErrorTelefono').innerHTML = "¡Ingresá un celular válido!";
            elemento = document.getElementById('telefono');
            elemento.value="";
            elemento.focus();

            return false;
        }
    document.getElementById('msgErrorTelefono').innerHTML = "";

    valor = document.getElementById("email").value;         
    if (!(/^[^@]+@[^@\.]+\.[^@]+$/.test(valor)))
    {
        document.getElementById('msgErrorEmail').innerHTML = "¡Ingresá un email válido!" ;
        
        elemento = document.getElementById('email');
        elemento.value = '';
        elemento.focus();

        return false;
    }
    document.getElementById('msgErrorEmail').innerHTML = "";

    valor = document.getElementById("motivo").value; 
    if( valor == null || valor.length == 0) 
    {
    
        document.getElementById('msgErrorMotivo').innerHTML = "Por favor, seleccioná el motivo del contacto.";
        elemento = document.getElementById('motivo');
        elemento.focus();
    
        return false;
    }
    document.getElementById('msgErrorMotivo').innerHTML = "";

    valor = document.getElementById("mensaje").value;
    
    if( valor == null || valor.length == 0) 
    {
    
        document.getElementById('msgErrorComentario').innerHTML = "¡Dejanos tu mensaje!";
        elemento = document.getElementById('mensaje');
        elemento.focus();
    
        return false;
    }
    document.getElementById('msgErrorComentario').innerHTML = "";
    
    return true;          
}
 

    //     debugger;
//     let nombre = document.getElementById('nombre').value;
//     let email = document.getElementById('email').value;
//     let telefono = document.getElementById('telefono').value;
//     let motivo = document.getElementById('motivo').value;
//     let mensaje = document.getElementById('mensaje').value;
//     let isValid = true;
//     if (nombre.trim() == '') {
//         document.getElementById("msgErrorNombre").style.display = "inline";
//         isValid = false;
//     }

//     if (email.trim() == '') {
//         alert('Por favor, ingresa tu correo electrónico.');
//         return false;
//     }

//     if (telefono.trim() == '') {
//         alert('Por favor, ingresa tu número de teléfono.');
//         return false;
//     }

//     if (motivo.trim() == '') {
//         alert('Por favor, selecciona un motivo de contacto.');
//         return false;
//     }

//     if (mensaje.trim() == '') {
//         alert('Por favor, ingresa tu mensaje.');
//         return false;
//     }

//     return isValid;