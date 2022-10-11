let nom = document.getElementById('nom_adopt');
let eml = document.getElementById('eml_adopt');
let telefono = document.getElementById('tel_adopt');
let form_adopt = document.getElementById('form_adopt');
let parrafo = document.getElementById('advertencias');
let enviado = document.getElementById('enviar');

form_adopt.addEventListener("submit", e=> {
    console.log('submit form')
    e.preventDefault()

    let advertencias = ""
    let entrar = false
    let regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let telefonoV = /^[00][0-9]{9,9}$/
    parrafo.innerHTML = ""

    if(nom.value.length < 1){
        advertencias += 'El nombre no es valido. <br>'
        entrar = true
        nom.style.border = '1px solid red'
    }
        else if (nom.value.length > 1){
            nom.style.border = '1px solid green'
        }

    if(!regexEmail.test(eml.value)){
        advertencias += 'El email no es valido. <br>'
        entrar = true
        eml.style.border = '1px solid red'
    }
        else if (regexEmail.test(eml.value)){
            eml.style.border =' 1px solid green'
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

console.log('Validaciones enter')

$(".btn-submit").click(function() {
    console.log('click on validaciones');
/* 	$(".overlay_form").addClass("active_form_overlay");
    console.log('click_overlay');
	$(".popup_form").addClass("active_form"); */

});

/* $(".btn-cerrar-popup").click( e=> {
    e.preventDefault();
    console.log('click');
	$(".overlay_form").removeClass("active_form_overlay");
    console.log('click_overlay');
	$(".popup_form").removeClass("active_form");

}); */