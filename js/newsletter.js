// constantes de inputs

const nombre = document.querySelector('#form__name');
const email = document.querySelector('#form__email');
const form = document.querySelector('#form');


// constates de los errores.


const nameError = document.querySelector('#nameerror');
const emailError = document.querySelector('#emailerror');


// boton
const button = document.getElementById('form__button');



form.addEventListener('submit', (e)=>{    
    e.preventDefault();
        
    validateName(nombre.value);
    validateEmail(email.value);

    
})



// obtiene el valor del nombre y lo valida
function validateName (values) {

    if(values.length == 0) {
            nameError.style.visibility = 'visible';    
        }else {
            nameError.style.visibility = 'hidden';
        }

}


// obtiene el valor del email y lo valida
function validateEmail(email){
    let validation = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if(!validation.test(email)){
        emailError.style.visibility = 'visible';
        
         
        } else {
            emailError.style.visibility = 'hidden'
            
        }


}










