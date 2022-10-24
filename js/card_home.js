

window.onload = llamar_gatosdos()

async function llamar_gatosdos() {
    const response = await fetch('api_cards_landing.json')
    const cats = await response.json()
    dibujar_slider(cats);
    dibujar_buttons_slider(cats)
}


function dibujar_slider(data){
    
    const cats_container = document.getElementById('slider_cats_cont');

    let cats_html = "";

    data.slice(0, 5).forEach((cat)  => {
        cats_html += `<div class="cont_box_slider_cat_display adopcion__display">
        <div class="box_slider_cat_display card">

            <div class="slider_cat_text card__text">

                            <div class="card-body">
                                <h5 class="nombre-card-body" id="nombre">${cat.nombre}</h5>
                                <ul>
                                    <li>
                                        <p class="sub-nombre">Edad:</p>
                                        <p class="sub-resultado" id="edad">${cat.edad} Años</p>
                                    </li>
                                    <li>
                                        <p class="sub-nombre">Sexo:</p>
                                        <p class="sub-resultado" id="sexo">${cat.sexo}</p>
                                    </li>
                                    <li>
                                        <p class="sub-nombre">Color: </p>
                                        <p class="sub-resultado" id="color">${cat.color}</p>
                                    </li>
                                    <li>
                                        <p class="sub-nombre">Esterilización:</p>
                                        <p class="sub-resultado" id="este">${cat.esterilizado}</p>
                                    </li>
                                    <li>
                                        <p class="sub-nombre">Vacunas:</p>
                                        <p class="sub-resultado" id="vacu">${cat.vacunado}</p>
                                    </li>
                                    <li>
                                        <p class="sub-nombre">Discapacidad:</p>
                                        <p class="sub-resultado" id="dis">${cat.discapacidad}</p>
                                    </li>
                                    <li>
                                        <p class="sub-nombre">Salud:</p>
                                        <p class="sub-resultado" id="salu">${cat.estado}</p>
                                    </li>
                                </ul>
                            </div>

                
                <button class="button button-adopt  card__button" id="btn_slider">Adoptame</button>
            </div>
            <div class="slider_cat_display slider_reorder_cat  card__cats">
                <img alt="gatito en adopción de color ${cat.color}" src="${cat.foto}" class="card__img">
            </div>
        </div>
    </div>`

    cats_container.innerHTML = cats_html;
    $(".slider_cats>div:nth-of-type(1)").addClass('cont_show');
    })

    reorder_slider_cats_home()
}

function reorder_slider_cats_home(){
	console.log('Entré a reordenar')
	$('.slider_cats>div:nth-of-type(2)>div>div:nth-of-type(2)').removeClass('slider_reorder_cat');
	$('.slider_cats>div:nth-of-type(4)>div>div:nth-of-type(2)').removeClass('slider_reorder_cat');
}

function dibujar_buttons_slider(data){

    const cats_buttons = document.getElementById('list_cats');
    const cat_buttons_rspnsv = document.getElementById('list_cats_rspnsv');

    let cats_html = "";
    let cats_responsive_html = "";

    data.slice(0, 5).forEach((cat, index)  => {
        cats_html += `<li class="list_cats_li  list-cats__li" id="indx_cts_li_${index+1}">
        <div class="circle_cat   list-cats__circle">
            <img src="${cat.foto}" class="list-cats__img" alt="gatito en adopción de color ${cat.color}">
        </div>
    </li>`

        cats_responsive_html += `<li class="list_cats_li  list-cats__li" id="indx_cts_li_rspnsv_${index+1}">
        <div class="circle_cat   list-cats__circle">
            <img src="${cat.foto}" class="list-cats__img" alt="gatito en adopción de color ${cat.color}">
        </div>
    </li>`

    })
    cats_buttons.innerHTML = cats_html;
    cat_buttons_rspnsv.innerHTML = cats_responsive_html;



    $("#indx_cts_li_1").click(function () {
		$(".cont_box_slider_cat_display").not(".slider_cats>div:nth-of-type(1)").fadeOut();
		$(".slider_cats>div:nth-of-type(1)").fadeIn();
	});

	/* 	$("#indx_cts_li_1").click(function () {
			$(".cont_box_slider_cat_display").not("#slider_cat_1").fadeOut();
			$("#slider_cat_1").fadeIn();
		}); */

	$("#indx_cts_li_2").click(function () {
		$(".cont_box_slider_cat_display").not(".slider_cats>div:nth-of-type(2)").fadeOut();
		$(".slider_cats>div:nth-of-type(2)").fadeIn();
	});

	$("#indx_cts_li_3").click(function () {
		$(".cont_box_slider_cat_display").not(".slider_cats>div:nth-of-type(3)").fadeOut();
		$(".slider_cats>div:nth-of-type(3)").fadeIn();
	});

	$("#indx_cts_li_4").click(function () {
		$(".cont_box_slider_cat_display").not(".slider_cats>div:nth-of-type(4)").fadeOut();
		$(".slider_cats>div:nth-of-type(4)").fadeIn();
	});

	$("#indx_cts_li_5").click(function () {
		$(".cont_box_slider_cat_display").not(".slider_cats>div:nth-of-type(5)").fadeOut();
		$(".slider_cats>div:nth-of-type(5)").fadeIn();
	});

    $("#indx_cts_li_rspnsv_1").click(function () {
		$(".cont_box_slider_cat_display").not(".slider_cats>div:nth-of-type(1)").fadeOut();
		$(".slider_cats>div:nth-of-type(1)").fadeIn();
	});

	$("#indx_cts_li_rspnsv_2").click(function () {
		$(".cont_box_slider_cat_display").not(".slider_cats>div:nth-of-type(2)").fadeOut();
		$(".slider_cats>div:nth-of-type(2)").fadeIn();
	});

	$("#indx_cts_li_rspnsv_3").click(function () {
		$(".cont_box_slider_cat_display").not(".slider_cats>div:nth-of-type(3)").fadeOut();
		$(".slider_cats>div:nth-of-type(3)").fadeIn();
	});

	$("#indx_cts_li_rspnsv_4").click(function () {
		$(".cont_box_slider_cat_display").not(".slider_cats>div:nth-of-type(4)").fadeOut();
		$(".slider_cats>div:nth-of-type(4)").fadeIn();
	});

	$("#indx_cts_li_rspnsv_5").click(function () {
		$(".cont_box_slider_cat_display").not(".slider_cats>div:nth-of-type(5)").fadeOut();
		$(".slider_cats>div:nth-of-type(5)").fadeIn();
	});

    $(".circle_cat").click(function () {
		$(".circle_cat").not(this).removeClass("blur");
		$(".circle_cat img").addClass("blur");
		$(".circle_cat").not(this).removeClass("actv");
		$(this).addClass("actv");
	});
}

