var boton = document.getElementById('btn_slider'),   
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    cerrar = document.getElementById('btn-cerrar-popup');

boton.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
})

cerrar.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
})