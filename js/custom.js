jQuery(document).ready(function ($) {
	console.log("Hola");

	/*     let nav = document.querySelector('nav');
	    let toggle = document.querySelector('.toggle');
	    toggle.onclick = function () {
	        nav.classList.toggle('active');
	    } */

	/* 	$("#listCats").click(function () {
			let test = this.src;
			console.log(test);
		}); */

	$(".products_txt ul li").click(function () {
		$(".products_txt ul li").not(this).removeClass("products_txt_actv");
		$(this).addClass("products_txt_actv");
	});

	$("#indx_cts_li_1").click(function () {
		$(".cont_box_slider_cat_display").not("#slider_cat_1").fadeOut();
		$("#slider_cat_1").fadeIn();
	});

	$("#indx_cts_li_2").click(function () {
		$(".cont_box_slider_cat_display").not("#slider_cat_2").fadeOut();
		$("#slider_cat_2").fadeIn();
	});

	$("#indx_cts_li_3").click(function () {
		$(".cont_box_slider_cat_display").not("#slider_cat_3").fadeOut();
		$("#slider_cat_3").fadeIn();
	});

	$("#indx_cts_li_4").click(function () {
		$(".cont_box_slider_cat_display").not("#slider_cat_4").fadeOut();
		$("#slider_cat_4").fadeIn();
	});

	$("#indx_cts_li_5").click(function () {
		$(".cont_box_slider_cat_display").not("#slider_cat_5").fadeOut();
		$("#slider_cat_5").fadeIn();
	});

	/* */

	/* ---------------------------------------------------------------- */

	$(".circle_cat").click(function () {
		$(".circle_cat").not(this).removeClass("blur");
		$(".circle_cat img").addClass("blur");
		$(".circle_cat").not(this).removeClass("actv");
		$(this).addClass("actv");
	});

});


/* ----------------------------------------------------------------------- */

/* $(function(){
    $(".cafes__item").slice(0, 9).show(); // select the first ten
    $("#load_more").click(function(e){ // click event for load more
        e.preventDefault();
        $(".cafes__item:hidden").slice(0, 20).show(); // select next 10 hidden cafes__items and show them
    });
}); */


$('#load_more').click(function () {
	$('.cafes').toggleClass('load_more_height_first');
	let load_more = document.getElementById('load_more').innerText;
	console.log('El valor es: ' + load_more);

	switch (load_more){
		case "Load More":
			document.getElementById('load_more').innerText = 'View Less';
			break;
		case "View Less":
			document.getElementById('load_more').innerText = 'Load More';
			break;
	}

/* 	if (load_more = 'Load More') {
		console.log('Entré aquí');
		document.getElementById('load_more').innerText = 'View Less';
	}

	load_more = document.getElementById('load_more').innerText;
	console.log('El valor es: ' + load_more);

	if(load_more = 'View Less'){
		document.getElementById('load_more').innerText = 'View More';
	} */

});

/* 	$('#view_less').click(function(){
		$('#view_less').fadeOut();
		$('.cafes').removeClass('load_more_height_first');
		$('#load_more').fadeIn();
	}); */

/* ----------------------------------------------------------------------- */

$(".arrow_up").click(function() {

	$("body, html").animate({
		scrollTop: $("main").offset().top -80
	},800);

});

let loader = document.getElementById('loader_cont_id');
window.addEventListener('load', function() {
	loader.style.display = 'none';
});