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
        }, 700);     
        
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



