let boton = document.getElementsByClassName('button-adopt'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    cerrar = document.getElementById('btn-cerrar-popup');

/*     jQuery(document).ready(function ($) { */

/*     }); */
$(document).on('click', "#btn_slider", function() {
    console.log('click');
    $(".overlay_form").addClass("active_form_overlay");
    console.log('click_overlay');
    $(".popup_form").addClass("active_form");
});


$(".btn-cerrar-popup").click( e=> {
    e.preventDefault();
    console.log('click');
	$(".overlay_form").removeClass("active_form_overlay");
    console.log('click_overlay');
	$(".popup_form").removeClass("active_form");

});



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

});



// POPUP DE RESERVA

const rmodal = document.getElementById('email-modal');
const openbtn = document.getElementById('reserva__button');
const closebtn = document.querySelector('.close-btn');

// ABRIR Y CERRAR EL MODAL

openbtn.addEventListener('click', () => {
    rmodal.style.display = 'block';
    

});


closebtn.addEventListener('click', () => {
    rmodal.style.display = 'none';  

});


window.addEventListener('click', (e) => {
    if(e.target ==  rmodal) {
        rmodal.style.display = 'none';
    }
})



// VALIDACIÓN DEL FORM


const rform = document.getElementById('form-reserva');

const rName = document.getElementById('reserva-name');
const rEmail = document.getElementById('reserva-email');
const rPhone = document.getElementById('reserva-phone');
const rDate = document.getElementById('reserva-date');
const rTime = document.getElementById('reserva-time');

const rInput = document.getElementById ('modal-input');

// events

rform.addEventListener('submit', (e) => {
    e.preventDefault();
   
    checkRequired([rName,rPhone,rDate,rTime]);     
    validateEmail(rEmail.value,rEmail);
    mensaje();

    
    });


// mostrar error

function showError (input,message) {
    const formValidation = input.parentElement;

    formValidation.className = 'form-validation-reserva input error';

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
    
};

// mostrar validacion

function showValid(input) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation-reserva valid'; 
};


// validacion de campos vacios

function checkRequired(inputArrm) {

        inputArrm.forEach(function(input) {

        if(input.value.trim() === '' ) { 
            showError (input, `${getFieldName(input)} no puede estar vacío`);
            input.style.border = '1px solid red';    
            
        } else {
            showValid(input); 
            input.style.border = '3px solid  #76BA99';
            return 2

        }


})};


function mensaje () {
    if (checkRequired([rName,rPhone,rDate,rTime])  == 2 || validateEmail(rEmail.value,rEmail) == 2 ) {  


        setTimeout(function() {
            alert('mensaje enviado');  
        }, 100);     
        
        rform.reset();      
    }
};




// capturar el nombre de cada input

function getFieldName (input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
};

// valida el campo de email
function validateEmail(x,y) {
    
    let validation = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if (validation.test(x) == false ){
        showError (y, `Ingrese un ${getFieldName(y)} válido.`);
            y.style.border = '1px solid red';     
            
    }    
    
    else {
       showValid(y); 
        y.style.border = '3px solid  #76BA99'; 
        return 2
        

    }

};



