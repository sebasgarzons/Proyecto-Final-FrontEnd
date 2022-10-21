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

//---FUNCIÓN SLIDER---//

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

	$("#indx_cts_li_rspnsv_1").click(function () {
		$(".cont_box_slider_cat_display").not("#slider_cat_1").fadeOut();
		$("#slider_cat_1").fadeIn();
	});

	$("#indx_cts_li_rspnsv_2").click(function () {
		$(".cont_box_slider_cat_display").not("#slider_cat_2").fadeOut();
		$("#slider_cat_2").fadeIn();
	});

	$("#indx_cts_li_rspnsv_3").click(function () {
		$(".cont_box_slider_cat_display").not("#slider_cat_3").fadeOut();
		$("#slider_cat_3").fadeIn();
	});

	$("#indx_cts_li_rspnsv_4").click(function () {
		$(".cont_box_slider_cat_display").not("#slider_cat_4").fadeOut();
		$("#slider_cat_4").fadeIn();
	});

	$("#indx_cts_li_rspnsv_5").click(function () {
		$(".cont_box_slider_cat_display").not("#slider_cat_5").fadeOut();
		$("#slider_cat_5").fadeIn();
	});




//---LOADER---//

	let loader = document.getElementById('loader_cont_id');
	window.addEventListener('load', function () {
		loader.style.display = 'none';
	});



	/* */

	/* ---------------------------------------------------------------- */


//---EFECTO DE LOS GATITOS DEL SLIDER---//

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

//---FUNCIÓN DEL BOTÓN DE LA GALERIA DE IMAGENES---//

$('#load_more').click(function () {
	$('.cafes').toggleClass('load_more_height_first');
	let load_more = document.getElementById('load_more').innerText;
	console.log('El valor es: ' + load_more);

	if (load_more === "Ver menos"){
		document.getElementById('load_more').innerText = 'Ver más ';
	}
	
	else{
		document.getElementById('load_more').innerText = 'Ver menos';
	}

	/*switch (load_more) {
		case "Ver más":
			document.getElementById('load_more').innerText = 'Ver menos ';
			break;
		case "Ver menos":
			document.getElementById('load_more').innerText = 'Ver más';
			break;
	}*/

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

//---FUNCIÓN DE FLECHA PARA QUE LA PAGINA VUELVA AL INICIO---//

$(".arrow_up").click(function () {

	$("body, html").animate({
		scrollTop: $("main").offset().top - 80
	}, 800);

});

/* ----------------------------------------------------------------------- */

//---EFECTO DEL SLIDER DE PARA QUE APRAREZACAN DEDE LA IZQUIERDA---//

const observer_left = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		}
		/*  else {
					entry.target.classList.remove('show');
				} */
	});
});


const hiddenElements_left = document.querySelectorAll('.hidden_rgth');
hiddenElements_left.forEach((el) => observer_left.observe(el));

const observer_right = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		}
		/*  else {
					entry.target.classList.remove('show');
				} */
	});
});


const hiddenElements_right = document.querySelectorAll('.hidden_lft');
hiddenElements_right.forEach((el) => observer_right.observe(el));

//---FUNCIÓN EFECTO DE INTRO---//

/* const typeWriter = document.getElementById("typewriter-text");
const text = "En Aromas & Maullidos somos amantes del café , de crear bonitos recuerdos pero sobre todo de los gatos, por esa razón contamos con una zona exclusiva para que puedas disfrutar de la compañia de gatitos adoptables, y degustar de nuestro menú.";

typeWriter.innerHTML = text;
typeWriter.style.setProperty("--characters", text.length); */


const maquina4 = document.getElementById('maquina-escribir4')

const maquinaEscribir3 = (text = '',tiempo = 10, etiqueta = '') => {
	console.log('Hola')
  let arrayCaracteres = text.split('')
  etiqueta.innerHTML = ''
  let i = 0
  let j = text.length
  let escribir = setInterval(function(){
    if (i === arrayCaracteres.length) {
      etiqueta.innerHTML = text.substring(0,j)

      if (j === 0) {
        etiqueta.innerHTML = ''
        i = 0
        j = text.length
      }
    } else {
      etiqueta.innerHTML += arrayCaracteres[i]
      i++
    }
  }, tiempo)
}


maquinaEscribir3("En Aromas & Maullidos somos amantes del café , de crear bonitos recuerdos pero sobre todo de los gatos, por esa razón contamos con una zona exclusiva para que puedas disfrutar de la compañia de gatitos adoptables, y degustar de nuestro menú.", 24, maquina4);
