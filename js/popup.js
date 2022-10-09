var boton = document.getElementById('btn_slider'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    cerrar = document.getElementById('btn-cerrar-popup');

/* boton.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
}) */


/* cerrar.addEventListener('click', e=>{
    e.preventDefault()
    overlay.classList.remove('active');
    popup.classList.remove('active');
    //overlay.reload();
}) */

$(".btn_slider").click(function() {
    console.log('click');
	$(".overlay_form").addClass("active_form_overlay");
    console.log('click_overlay');
	$(".popup_form").addClass("active_form");

});

$(".btn-cerrar-popup").click(function() {
    e.preventDefault();
    console.log('click');
	$(".overlay_form").removeClass("active_form_overlay");
    console.log('click_overlay');
	$(".popup_form").removeClass("active_form");

});