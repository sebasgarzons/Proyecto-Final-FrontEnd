const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const form = document.getElementById('form');
const parrafo = document.getElementById('advertencias');
const enviado = document.getElementById('enviar');

form.addEventListener("submit", e=> {
    e.preventDefault()

    let advertencias = ""
    let entrar = false
    let regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let telefonoV = /^[09][0-9]{9,9}$/
    parrafo.innerHTML = ""

    if(nombre.value.length < 6){
        advertencias += 'El nombre no es valido. <br>'
        entrar = true
        nombre.style.border = '1px solid red'
    }
        else if (nombre.value.length > 6){
            nombre.style.border = '1px solid green'
        }

    if(!regexEmail.test(email.value)){
        advertencias += 'El email no es valido. <br>'
        entrar = true
        email.style.border = '1px solid red'
    }
        else if (regexEmail.test(email.value)){
            email.style.border =' 1px solid green'
        }

    if(!telefonoV.test(telefono.value)){
        advertencias += 'El número no es valido.<br>'
        entrar = true
        telefono.style.border = '1px solid red'
    }
        else if (telefonoV.test(telefono.value)){
            telefono.style.border = '1px solid green'
        }

    if (entrar){
        parrafo.innerHTML = advertencias
    }

    else{
        enviado.innerHTML = "Enviado"
        alert("Enviado");
        form.reset();
    
    }
})