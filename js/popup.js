var btnAbrirPopup = document.getElementById('btn_slider'),
overlay = document.getElementById('btn_slider'),
popup = document.getElementById('popup'),
btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function() {
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function() {
    overlay.classList.remove('active');
    popup.classList.remove('active');
});

